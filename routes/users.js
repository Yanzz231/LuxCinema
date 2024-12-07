var express = require('express');
var router = express.Router();

// HELPER
const {responseJson} = require("../helper/response");
const { upload } = require('../helper/uploadImage');

// MODELS
const Users = require("../models/users");

router.post('/create', async function (req, res, next) {
    try {
        await Users.create(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/login', async function (req, res, next) {
    try {
        await Users.login(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/verify', async function (req, res, next) {
    try {
        await Users.otp_check(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/changepassword', async function (req, res, next) {
    try {
        await Users.changepassword(res, req.body, req.headers.authorization);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})


router.post('/forgetpassword', async function (req, res, next) {
    try {
        await Users.forgetpassword(res, req.body, req.headers.authorization);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/check-email', async function (req, res, next) {
    try {
        await Users.check_email(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/check-token', async function (req, res, next) {
    try {
        await Users.check_token(res, req.body);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/changepp', upload, async function (req, res)  {
    try {
        if (!req.files || req.files.length === 0) {
            return responseJson(res, false, [], "Image tidak ada")
        }
        return responseJson(res, true, req.files, "Berhasil mengupload foto")
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})

router.post('/changeaccount', upload, async function (req, res)  {
    try {
        await Users.changeaccount(res, req.body,req.headers.authorization);
    } catch (err) {
        return responseJson(res, false, [], err.message)
    }
})


module.exports = router;
