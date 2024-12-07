const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var chalk = require('chalk');

require('dotenv').config();

// DATABASE
const db = require("../config/connection")

// HELPER
const {responseJson} = require("../helper/response");
const {func} = require("../helper/function");

const Users = {
    check_token: async (res, data) => {
        const {token} = data;

        if (token === undefined) return responseJson(res, "no_query", [], "Tidak ada query")
        try {
            const [token_check] = await db.promise().execute('SELECT * FROM users WHERE token = ?', [token])
            if (token_check.length === 0) return responseJson(res, "token_not_found", [], "Token tidak ada")
            return responseJson(res, true, token_check[0], "Token ada")
        } catch(err) {
            return responseJson(res, false, [], err.message)
        }
    },
    check_email: async (res, data) => {
        const {email} = data;

        if (email === undefined) return responseJson(res, "no_query", [], "Tidak ada query")
        try {
            const [email_check] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [email])
            if (email_check.length === 0) return responseJson(res, "email_not_found", [], "Email tidak ada")
            return responseJson(res, true, email_check[0], "Email ada")
        } catch {
            return responseJson(res, false, [], err.message)
        }
    },
    changepp: async (data, token) => {
        if (token === undefined) return responseJson(res, "token_undefined", [], "Token tidak ada")

        const [token_check] = await db.promise().execute('SELECT * FROM users WHERE token = ?', [token.replace("Bearer ", "")])
        if (token_check.length === 0) return responseJson(res, "token_not_found", [], "Token tidak ada")

        const sqlMessage = "UPDATE users SET image = ? WHERE token = ?";
        await db.promise().execute(sqlMessage, [data.thumb, token.replace("Bearer ", "")])
    },
    changeaccount: async (res, data, token) => {
        if (token === undefined) return responseJson(res, "token_undefined", [], "Token tidak ada")

        const [token_check] = await db.promise().execute('SELECT * FROM users WHERE token = ?', [token.replace("Bearer ", "")])
        if (token_check.length === 0) return responseJson(res, "token_not_found", [], "Token tidak ada")

        const sqlMessage = "UPDATE users SET username = ?,email = ? WHERE token = ?";
        await db.promise().execute(sqlMessage, [data.name, data.email, token.replace("Bearer ", "")])
        return responseJson(res, true, [], "Berhasil Update")
    },
    forgetpassword: async (res, data, token) => {
        const { email } = data
        try {
            if (email === undefined) return responseJson(res, "no_query", [], "Tidak ada query")

            const [email_check] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [email])
            if (email_check.length === 0) return responseJson(res, "email_not_found", [], "Email tidak ada")

            if (email_check[0].otp_password !== null || email_check[0].otp_password_reminder > Date.now()) {
                return responseJson(res, "otp_password_already_exists", [], "OTP Password itu masih ada")
            }


            const code_otp = func.generateRandom4Digit()
            const otp_reminder = Date.now() + (60 * 10 * 1000)

            const sqlMessage = "UPDATE users SET otp_password = ?, otp_password_reminder = ? WHERE email = ?";
            await db.promise().execute(sqlMessage, [code_otp, otp_reminder, email])

            func.sendMail(code_otp, email_check[0].email, "change_password")

            return responseJson(res, true, [], "Code OTP Di kirim")

        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    },
    changepassword: async (res, data, token) => {
        const {password, password_change} = data;

        if (password === undefined || password_change === undefined) return responseJson(res, "no_query", [], "Tidak ada query")

        try {
            if (token === undefined) return responseJson(res, "token_undefined", [], "Token tidak ada")

            const [token_check] = await db.promise().execute('SELECT * FROM users WHERE token = ?', [token.replace("Bearer ", "")])
            if (token_check.length === 0) return responseJson(res, "token_not_found", [], "Token tidak ada")

            // CHECKING PASSWORD
            const checkPassword = await bcrypt.compare(password, token_check[0].password)
            if (!checkPassword) {
                return responseJson(res, "password_incorrect", [], "Password salah")
            }

            const hashPassword = await bcrypt.hash(password_change, 10)
            const sqlMessage = "UPDATE users SET password = ? WHERE token = ?";
            await db.promise().execute(sqlMessage, [hashPassword, token.replace("Bearer ", "")]);

            return responseJson(res, true, [], "Berhasil Mengubah Password")
        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    },
    otp_check: async (res, data) => {
        try {
            const {type, otp_verify, email, otp_password, password} = data;

            if (type === "otp") {
                const [response] = await db.promise().execute('SELECT * FROM users')
                const result = response.filter(i => i.otp_reminder < Date.now())


                let count = 0;
                for (let i = 0; i < result.length; i++) {
                    if (result[i].otp_reminder !== null) {
                        count++;
                        const sqlMessage = 'UPDATE users SET otp_verify = ?, otp_reminder = ? WHERE id = ?';
                        await db.promise().execute(sqlMessage, [null, null, result[i].id]);
                    }
                }

                if (count !== 0) {
                    console.log(chalk.redBright(`Menghapus ${count} data OTP Code`))
                }
            } else if (type === "password_change") {
                const [response] = await db.promise().execute('SELECT * FROM users')
                const result = response.filter(i => i.otp_password_reminder < Date.now())


                let count = 0;
                for (let i = 0; i < result.length; i++) {
                    if (result[i].otp_password_reminder !== null) {
                        count++;
                        const sqlMessage = 'UPDATE users SET otp_password = ?, otp_password_reminder = ? WHERE id = ?';
                        await db.promise().execute(sqlMessage, [null, null, result[i].id]);
                    }
                }

                if (count !== 0) {
                    console.log(chalk.redBright(`${count} Data menghapus OTP Code {Password_change}`))
                }
            } else if (type === "checking_otp") {

                // CHECKING QUERY
                if (otp_verify === undefined || email === undefined) return responseJson(res, "no_query", [], "Tidak ada query")

                // CHECKING EMAIL
                const [email_check] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [email])
                if (email_check.length === 0) return responseJson(res, "email_not_found", [], "Email tidak ada")

                const code_otp = func.generateRandom4Digit()
                const otp_reminder = Date.now() + (60 * 10 * 1000)

                if (email_check[0].status === "true") return responseJson(res, "verify", [], "Sudah Verifikasi")

                if (email_check[0].otp_reminder < Date.now() && email_check[0].status === "false") {
                    const sqlMessage = "UPDATE users SET otp_verify = ?, otp_reminder = ? WHERE email = ?";
                    await db.promise().execute(sqlMessage, [code_otp, otp_reminder, email])

                    func.sendMail(code_otp, email)

                    return responseJson(res, "expired_verify", [], "OTP kode sudah expired")
                }

                if (otp_verify === email_check[0].otp_verify) {
                    const sqlMessage = "UPDATE users SET status = ?, otp_reminder = ?, otp_verify   = ? WHERE email = ?";
                    await db.promise().execute(sqlMessage, ["true", null, null, email])

                    return responseJson(res, true, [], "OTP Benar")
                } else {
                    return responseJson(res, false, [], "OTP Salah")
                }
            } else if (type === "checking_otp_password") {

                // CHECKING QUERY
                if (otp_password === undefined || email === undefined || password === undefined) return responseJson(res, "no_query", [], "Tidak ada query")

                // CHECKING EMAIL
                const [email_check] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [email])
                if (email_check.length === 0) return responseJson(res, "email_not_found", [], "Email tidak ada")

                if (email_check[0].status === "false") return responseJson(res, "not_verify", [], "Belum Verifikasi")

                if (email_check[0].otp_password_reminder < Date.now() && email_check[0].status === "true") return responseJson(res, false, [], "Tidak ada sesi")

                if (otp_password === email_check[0].otp_password) {

                    const hashPassword = await bcrypt.hash(password, 10)

                    const sqlMessage = "UPDATE users SET status = ?, otp_password_reminder = ?, otp_password = ?,password = ? WHERE email = ?";
                    await db.promise().execute(sqlMessage, ["true", null, null, hashPassword, email])

                    return responseJson(res, true, [], "OTP Benar")
                } else {
                    return responseJson(res, false, [], "OTP Salah")
                }
            }
        } catch (err) {
            return data.type === "otp" || data.type === "password_change" ? null : responseJson(res, false, [], err.message)
        }
    },
    login: async (res, data) => {
        try {
            const {username, password} = data

            if (username === undefined || password === undefined) return responseJson(res, "no_query", [], "Tidak ada query")

            let Usernamestatus = false;
            let dataReal = []

            // EMAIL & USERNAME CHECK
            const [email_check] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [username])
            if (email_check.length === 0) {
                const [username_check] = await db.promise().execute('SELECT * FROM users WHERE username = ?', [username])
                if (username_check.length === 0) {
                    Usernamestatus = true
                    return responseJson(res, "account_not_found", [], "Account tidak ada")
                } else {
                    dataReal = username_check
                }
            } else {
                dataReal = email_check
            }

            // CHECKING OTP
            if (dataReal[0].status === "false" && (dataReal[0].otp_reminder < Date.now() || dataReal[0].otp_reminder === "null")) {

                const otp_verify = func.generateRandom4Digit()
                const otp_reminder = Date.now() + (60 * 10 * 1000)

                const sqlMessage = `UPDATE users
                                    SET otp_verify   = ?,
                                        otp_reminder = ?
                                    WHERE ${Usernamestatus ? "username" : "email"} = ?`;
                await db.promise().execute(sqlMessage, [otp_verify, otp_reminder, username])

                func.sendMail(otp_verify, dataReal[0].email)

                return responseJson(res, "expired_verify", [], "OTP kode sudah expired")

            } else if (dataReal[0].status === "false" && dataReal[0].otp_reminder > Date.now()) {
                return responseJson(res, "otp_verify", [], "Belum Verifikasi")
            }

            // CHECK PASSWORD
            const checkPassword = await bcrypt.compare(password, email_check[0].password)
            if (!checkPassword) {
                return responseJson(res, "password_incorrect", [], "Password salah")
            }

            // CONVERST TOKEN WITH JWT
            const token = jwt.sign({}, process.env.JWT_SECRET)

            // SQL UPDATE TOKEN TO JWT CODE
            const sqlMessage = `UPDATE users
                                SET token  = ?,
                                    status = ?
                                WHERE ${Usernamestatus ? "username" : "email"} = ?`;
            await db.promise().execute(sqlMessage, [token, "true", username])

            return responseJson(res, true, {account: username, token: token, id: dataReal[0].id, username: dataReal[0].username, phone: dataReal[0].phone}, "Berhasil Login")
        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    },
    create: async (res, data) => {
        // DATA BODY
        const {username, email, password, phone} = data

        if (username === undefined || email === undefined || password === undefined || phone === undefined) return responseJson(res, "no_query", [], "Tidak ada query")

        try {
            // CHECKING EMAIL
            const [email_check] = await db.promise().execute('SELECT * FROM users WHERE email = ?', [email])
            if (email_check.length > 0) {
                return responseJson(res, "email_already_exists", [], "Email sudah terdaftar")
            }

            // CONVERT PASSWORD TO BCRYPT CODE
            const hashPassword = await bcrypt.hash(password, 10)
            data.password = hashPassword

            // DEFAULT
            const status = "false"
            const token = null
            const type = "customer"
            const otp_verify = func.generateRandom4Digit()
            const otp_reminder = Date.now() + (60 * 10 * 1000)
            const otp_password = null
            const otp_password_reminder = null
            const images = "/images/defaultLogo.jpg"

            // INSERT DATA BY DATA BODY
            const sqlMessage = 'INSERT INTO users (status, username, email, password, type, image, phone, token, otp_verify, otp_reminder, otp_password, otp_password_reminder) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)'
            await db.promise().execute(sqlMessage, [status, username, email, hashPassword, type, images, phone, token, otp_verify, otp_reminder, otp_password, otp_password_reminder])

            func.sendMail(otp_verify, email)

            return responseJson(res, true, {
                status: status, ...data,
                type: type,
                otp_password: otp_password,
                otp_password_reminder: otp_password_reminder,
                image: images,
                token: token,
                otp_verify: otp_verify,
                otp_reminder: otp_reminder
            }, "Berhasil Menambahkan Data Users")

        } catch (err) {
            return responseJson(res, false, [], err.message)
        }
    }
}

module.exports = Users