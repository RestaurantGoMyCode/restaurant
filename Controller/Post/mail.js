const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service : "beltaief.maroua@gmail.com", 
    port : 587,
    host : 'smtp.gmail.com',
    secure : false,
    auth : {
        user : process.env.EMAIL,
        pass : process.env.PASSWORD
    },
    tls : {
        rejectUnauthorized: false,
    }
});

transporter.verify(function(error, success){
    if (error){
        console.log(error,'server error');
    } else {
        console.log('server is ready to take our Messages');
    }
});

const nodmail = async(req, res, next) => {
    var firstNameClient = req.body.firstNameClient
    var lastNameClient = req.body.lastNameClient
    var mailClient = req.body.mailClient
    var phoneClient = req.body.phoneClient
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h1> Nouvelle réservation pour aujourd'hui</h1>
        <div class="container">
          <h2>${firstNameClient}</h2>
          <p>${lastNameClient}</p>
          <h2>${mailClient}</h2>
          <p>${phoneClient}</p>
        </div>
    </body>
    </html>`
    var mail = {
        from : req.body.mailClient,
        to : "beltaief.maroua@gmail.com",
        Subject : phoneClient,
        text : firstNameClient,
        html : html

    }

    transporter.sendMail(mail, (err,data) =>{
        if (err) {
            res.json({
                status : 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
}

module.exports = {
    nodmail,
};