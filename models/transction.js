const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var chalk = require('chalk');

require('dotenv').config();

// DATABASE
const db = require("../config/connection")

// HELPER
const {responseJson} = require("../helper/response");
const {func} = require("../helper/function");
const {midtrans} = require("../helper/midtrans");

const Transction = {
    create: async (res, data) => {
        const {data_seat, seat_id, film, time, user_id, total_price, quantity, price, theatre, email, username, phone} = data
        try {

            const [data_check] = await db.promise().execute('SELECT * FROM transactions WHERE playtime_id = ?',[seat_id]);
            if (data_check.length !== 0) {
                const sqlQuery = `
                    SELECT 
                        td.seat, t.status
                    FROM transactions t
                    JOIN transactiondetails td ON t.id = td.transaction_id
                    WHERE t.playtime_id = ? AND (t.status = 'completed' OR t.status = 'pending')
                `;
            
                const [result] = await db.promise().execute(sqlQuery, [seat_id]);
            
                // Check if any seat in `data_seat` is already taken
                const isSeatTaken = data_seat.some(seat => 
                    result.some(detail => detail.seat === seat && detail.status === "completed")
                );
            
                if (isSeatTaken) {
                    return responseJson(res, false, [], "Sudah ada yang beli (status completed)");
                }
            
                const isSeatTakenPending = data_seat.some(seat => 
                    result.some(detail => detail.seat === seat && detail.status === "pending")
                );
            
                if (isSeatTakenPending) {
                    return responseJson(res, false, [], "Sudah ada yang beli (status pending)");
                }
            }
            
            const invoice = `${theatre}-${Date.now()}${user_id}${seat_id}`
            
            const getResult = await midtrans.createTransaction(username, email, invoice, total_price, data_seat, price, film, time, phone)
            
            const sqlMessage = 'INSERT INTO transactions (invoice, status, token, user_id, payment_method, payment_total, playtime_id, quantity) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
            const result = await db.promise().execute(sqlMessage, [invoice, "pending", getResult.redirect_url, user_id, "no_data", total_price, seat_id, quantity])

            for (let i = 0; i < data_seat.length; i++) {
                const sqlMessage = 'INSERT INTO transactiondetails (transaction_id , seat, price) VALUES(?, ?, ?)'
                await db.promise().execute(sqlMessage, [result[0].insertId, data_seat[i], price])
            }


            return responseJson(res, true, {
                ...getResult,
                user_data: {
                    invoice: invoice,
                    status: "pending",
                    user_id,
                    payment_method: null,
                    payment_total: total_price,
                    playtime_id: seat_id,
                    quantity: quantity
                }
            })
        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    },
    create_fnb: async (res, data) => {
        const {data_food, user_id, total_price, email, username, pickup_time, theatre_id, theatre_name, phone} = data
        try {            
            const invoice = `food-${theatre_name}-${Date.now()}${user_id}`
            
            const getResult = await midtrans.createTransactionFNB(username, email, invoice, total_price, data_food, pickup_time, theatre_name, phone)
            
            const sqlMessage = 'INSERT INTO transactionfnbs (invoice, status, pickup_time, theatres_id, token, user_id, payment_method, payment_total) VALUES(?, ?, ?, ?, ?, ?, ?, ?)'
            const result = await db.promise().execute(sqlMessage, [invoice, "pending", pickup_time, theatre_id, getResult.redirect_url, user_id, "no_data", total_price])

            for (let i = 0; i < data_food.length; i++) {
                const sqlMessage = 'INSERT INTO fnbdetails (transaction_id , menu_id, price, quantity) VALUES(?, ?, ?, ?)'
                await db.promise().execute(sqlMessage, [result[0].insertId, data_food[i].id, data_food[i].price, data_food[i].quantity])
            }


            return responseJson(res, true, {
                ...getResult,
                user_data: {
                    invoice: invoice,
                    status: "pending",
                    user_id,
                    theatre_id,
                    payment_method: null,
                    payment_total: total_price,
                }
            })
        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    },
    notification: async (res, data) => {
        try {

            if(data.order_id.startsWith("food")) {
                const [data_check] = await db.promise().execute('SELECT * FROM transactionfnbs WHERE invoice = ?', [data.order_id])
                if (data_check.length === 0) return responseJson(res, "data_not_found", [], "Data tidak ada")
                    
                if (data.transaction_status === "settlement") {
                    const sqlMessage = 'UPDATE transactionfnbs SET status = ? WHERE invoice = ?';
                    await db.promise().execute(sqlMessage, ["completed", data.order_id]);
                } else if (data.transaction_status === "pending") {
                    const sqlMessage = 'UPDATE transactionfnbs SET payment_method = ?, status = ? WHERE invoice = ?';
                    await db.promise().execute(sqlMessage, [data.payment_type, "pending", data.order_id]);
                } else if (data.transaction_status === "expire") {
                    const sqlMessage = 'UPDATE transactionfnbs SET status = ? WHERE invoice = ?';
                    await db.promise().execute(sqlMessage, ["expire", data.order_id]);
                }
            } else {
                const [data_check] = await db.promise().execute('SELECT * FROM transactions WHERE invoice = ?', [data.order_id])
                if (data_check.length === 0) return responseJson(res, "data_not_found", [], "Data tidak ada")
                    
                if (data.transaction_status === "settlement") {
                    const sqlMessage = 'UPDATE transactions SET status = ? WHERE invoice = ?';
                    await db.promise().execute(sqlMessage, ["completed", data.order_id]);
                } else if (data.transaction_status === "pending") {
                    const sqlMessage = 'UPDATE transactions SET payment_method = ?, status = ? WHERE invoice = ?';
                    await db.promise().execute(sqlMessage, [data.payment_type, "pending", data.order_id]);
                } else if (data.transaction_status === "expire") {
                    const sqlMessage = 'UPDATE transactions SET status = ? WHERE invoice = ?';
                    await db.promise().execute(sqlMessage, ["expire", data.order_id]);
                }
            }
            return responseJson(res, true, [], "Berhasil")
        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    },
    view: async (res, data) => {
        try {
            const sqlQuery = `
                SELECT 
                    t.id AS transaction_id,
                    t.status,
                    td.id AS detail_id,
                    td.seat,
                    td.price
                FROM transactions t
                LEFT JOIN transactiondetails td ON t.id = td.transaction_id
                WHERE t.playtime_id = ?
            `;
    
            const [result] = await db.promise().execute(sqlQuery, [data.id]);
            if (result.length === 0) return responseJson(res, "data_not_found", [], "Data tidak ada");
    
            const dataPending = result.filter(row => row.status === "pending");
            const dataCompleted = result.filter(row => row.status === "completed");
    
            return responseJson(res, "success", {
                pending: dataPending,
                completed: dataCompleted
            }, "Detail transaksi ditemukan");
    
        } catch (err) {
            return responseJson(res, false, [], err.message);
        }
    },
    view_transction: async (res, data) => {
        try {
            const [data_check] = await db.promise().execute('SELECT * FROM transactions WHERE user_id = ?', [data.id])
            const [data_checkFNV] = await db.promise().execute(`
                SELECT t.id, t.invoice, t.status, t.pickup_time, t.token, t.user_id, t.date_transaction, 
                    t.payment_method, t.payment_total, t.theatres_id, th.name AS theatre_name
                FROM transactionfnbs t
                JOIN theatres th ON t.theatres_id = th.id
                WHERE t.user_id = ?`, [data.id]);

            return responseJson(res, true, [...data_check,...data_checkFNV], "Berhasil menampilkan data");
        } catch(err) {
            return responseJson(res, false, [], err.message);
        }
    }
}

module.exports = Transction