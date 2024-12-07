const multer = require('multer');
const path = require('path');
const fs = require('fs');

// MODELS
const Users = require("../models/users");

// HELPER
const {func} = require("../helper/function");


const ensureDirExists = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, {recursive: true});
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../public/images');
        ensureDirExists(dir);
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const randomDigit = func.generateRandom10Digit()
        Users.changepp({thumb: `/images/thumb-${randomDigit}${ext}`}, req.headers.authorization);
        cb(null, `thumb-${randomDigit}${ext}`);
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
            return cb(new Error('Only images are allowed'), false);
        }

        cb(null, true);
    }
}).array('files', 10);

module.exports = {
    upload,
    ensureDirExists,
};
