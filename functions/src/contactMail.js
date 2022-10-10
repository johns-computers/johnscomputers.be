const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const cors = require("cors")({ origin: true });

const req_types = {
    "telecom": ["cedric@johnscomputers.be", "johnny@johnscomputers.be"],
    "sales": ["raphael@johnscomputers.be", "johnny@johnscomputers.be"],
    "repa": ["samuel@johnscomputers.be", "johnny@johnscomputers.be"],
    "compta": ["cindy@johnscomputers.be", "johnny@johnscomputers.be"],
}


exports.contactMail = functions.region('europe-west1').https.onRequest(async (req, res) => {
    cors(req, res, async () => {
        res.setHeader('Content-Type', 'application/json');
        let transporter = nodemailer.createTransport({
            host: "smtp.office365.com",
            port: 587,
            secure: false,
            tls: { 
                rejectUnauthorized: false 
            },
            auth: {
                user: "nils@johnscomputers.be",
                pass: "fpwbzsgcskxvnmgv",
            },
        });
        let info = await transporter.sendMail({
            from: `"Nils Simons" <nils@johnscomputers.be>`,
            to: req_types[req.body.req_type],
            subject: `Demande/Probleme | ${req.body.req_name}`,
            text: `
            Message du Formulaire de Contact du Site Johnscomputers.be
            \n
            Nom: ${req.body.req_name}
            Email: ${req.body.req_email}
            Tel: ${req.body.req_phone}
            \n
            Demande: ${req.body.req_body}
            `
        });
        // console.log(info);
        res.sendStatus(200);
    })
});
