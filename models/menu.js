const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var chalk = require('chalk');

require('dotenv').config();

// DATABASE
const db = require("../config/connection")

// HELPER
const {responseJson} = require("../helper/response");

const Menu = {
    view: async (res, data) => {
        try {
            const [data_check] = await db.promise().execute('SELECT * FROM menus')

            return responseJson(res, true, data_check, "Menampilkan data menus");
        } catch (err) {
            return responseJson(res, false, [], err.message);
        }
    }


}

module.exports = Menu