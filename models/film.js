const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var chalk = require('chalk');

require('dotenv').config();

// DATABASE
const db = require("../config/connection")

// HELPER
const {responseJson} = require("../helper/response");

const Film = {
    view: async (res, data) => {
        try {
            const { id, type } = data
            if (id) {
                const [data_check] = await db.promise().execute(
                    'SELECT * FROM films WHERE id = ?',
                    [id]
                );

                if (data_check.length === 0) {
                    return responseJson(res, false, [], `Film dengan ID ${id} tidak ditemukan.`);
                }

                return responseJson(res, true, {
                    data: data_check[0],
                }, `Menampilkan data film dengan ID ${id}`);
            }
            if(type) {
                const [data_check] = await db.promise().execute(
                    'SELECT * FROM films WHERE status = ?',
                    ["Now-Showing"]
                );

                const [data_checkUpcoming] = await db.promise().execute(
                    'SELECT * FROM films WHERE status = ?',
                    ["Up-Coming"]
                );

                return responseJson(res, true, {
                    data: {
                        show: data_check,
                        upcoming: data_checkUpcoming
                    },
                }, `Menampilkan data film dengan ID ${id}`);
            }

            const page = parseInt(data.page) || 1;
            const limit = parseInt(data.limit) || 10;
            const offset = (page - 1) * limit;

            const [data_check] = await db.promise().execute(
                'SELECT * FROM films LIMIT ? OFFSET ?',
                [limit, offset]
            );

            const [totalResult] = await db.promise().execute('SELECT COUNT(*) as total FROM films');
            const totalData = totalResult[0].total;
            const totalPages = Math.ceil(totalData / limit);

            return responseJson(res, true, {
                data: data_check,
                currentPage: page,
                totalPages: totalPages,
                totalData: totalData
            }, "Menampilkan data films");
        } catch (err) {
            return responseJson(res, false, [], err.message);
        }
    }


}

module.exports = Film