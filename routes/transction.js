var express = require('express');
var router = express.Router();

// HELPER
const {responseJson} = require("../helper/response");

// MODELS
const Transction = require("../models/transction");

router.post('/create', async function (req, res, next) {
    try {
        await Transction.create(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/create-food', async function (req, res, next) {
    try {
        await Transction.create_fnb(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/notification', async function (req, res, next) {
    try {
        await Transction.notification(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.get('/view', async function (req, res, next) {
    try {
        await Transction.view(res, req.query);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.get('/view-transction', async function (req, res, next) {
    try {
        await Transction.view_transction(res, req.query);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})


module.exports = router;
