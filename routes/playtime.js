var express = require('express');
var router = express.Router();

// HELPER
const {responseJson} = require("../helper/response");

// MODELS
const Playtime = require("../models/playtime");

router.get('/view', async function (req, res, next) {
    try {
        await Playtime.view(res, req.query);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

module.exports = router;
