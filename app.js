var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const path = require('path');
var chalk = require('chalk');
const cron = require('node-cron');
const cors = require("cors");

// MODELS
const Users = require("./models/users");

require('dotenv').config();

var usersRouter = require('./routes/users');
var transctionsRouter = require('./routes/transction');
var filmsRouter = require('./routes/film')
var menusRouter = require('./routes/menu')
var theatresRouter = require('./routes/theatre')
var playtimesRouter = require('./routes/playtime')

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.options("*", cors()); 
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/transction', transctionsRouter);
app.use('/api/film', filmsRouter);
app.use('/api/menu', menusRouter);
app.use('/api/theatre', theatresRouter);
app.use('/api/playtime', playtimesRouter);
app.use('/api/public', express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(chalk.green(`Listen to Port ${port}`));
})

// CHECKING OTP
cron.schedule('*/5 * * * *', () => {
    Users.otp_check(null, {type: "otp"})
    Users.otp_check(null, {type: "password_change"})
    console.log(chalk.redBright(`Checking Data Reminder!`))
});

module.exports = app;
