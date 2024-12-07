const nodemailer = require("nodemailer");
var chalk = require('chalk');

require('dotenv').config();

const transporter = nodemailer.createTransport({
    port: 587,
    secure: false,
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_NODEMAILER,
        pass: process.env.PASSWORD_NODEMAILER,
    },
});

const generateRandom4Digit = () => {
    return Math.floor(1000 + Math.random() * 9000);
}

const generateRandom10Digit = () => {
    return Math.floor(1000000000 + Math.random() * 9000000000);
}

const sendMail = async (otp_code, email_sender, type) => {
    const htmlContent = `
    <html>
        <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px;">
            <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333; text-align: center;">${type === "change_password" ? "Reset Password" : "Verifikasi alamat email Anda"}</h1>
                <p style="color: #555555; text-align: center;">${type === "change_password" ? "Klik tombol di bawah ini untuk reset password anda" : "Klik tombol di bawah ini untuk memverifikasi email Anda."}</p>
                <a href="${process.env.WEBSITE}/otp?email=${email_sender}&type=${type === "change_password" ? "change_password" : "verify"}" style="display: block; text-align: center; background-color: #ffcc00; color: #ffffff; font-size: 16px; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verifikasi Email</a>
                <p style="text-align: center; color: #555555;">Kode OTP Anda: <b>${otp_code}</b></p>
                <footer style="margin-top: 20px; text-align: center; color: #888888;">
                    <p>Bioskop Favorite Anda</p>
                </footer>
            </div>
        </body>
    </html>`;

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_NODEMAILER,
            to: email_sender,
            subject: type === "change_password" ? "Reset Password" : "Verifikasi email kamu yuk!",
            text: `Your OTP code is: ${otp_code}`,
            html: htmlContent,
        });
        console.log(chalk.greenBright(`Berhasil mengirim email ke ${email_sender}`));
        return {status: true, message: `Berhasil mengirim email ke ${email_sender}`};
    } catch (err) {
        console.log(err.message)
        return {status: false, message: err.message};
    }
};

const DateNow = () => {
    const now = new Date();

    const padZero = (num) => (num < 10 ? `0${num}` : num);

    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const formattedDate = `${padZero(now.getDate())} ${months[now.getMonth()]} ${now.getFullYear()} ` +
        `${padZero(now.getHours())}:${padZero(now.getMinutes())}:${padZero(now.getSeconds())}`;

    return formattedDate;

}

module.exports = {
    func: {
        generateRandom4Digit,
        generateRandom10Digit,
        sendMail,
        DateNow
    }
}