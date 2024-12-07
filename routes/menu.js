var express = require('express');
var router = express.Router();

// HELPER
const {responseJson} = require("../helper/response");

// MODELS
const Menu = require("../models/menu");

router.get('/view', async function (req, res, next) {
    try {
        await Menu.view(res, req.query);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

module.exports = router;
