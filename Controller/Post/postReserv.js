const {connection}= require('../../ConfigurationDataBase/config')
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);
module.exports = {
    postReserv:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO reservation(firstNameClient,lastNameClient,mailClient,phoneClient,numberClient)VALUES("${req.body.firstNameClient}","${req.body.lastNameClient}","${req.body.mailClient}","${req.body.phoneClient}","${req.body.numberClient}")`
        console.log("query",query)
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("Reservation OK")
        })
    }),
    sendSms:((req,res)=>{
        console.log(req.body)
        client.messages
        .create({
           body: `Réservation enregistrée pour aujourd'hui pour ${req.body.numberClient}  personnes`,
           from: '+18653838990',
           to: req.body.SMS
         })
        .then((message)=>{
            console.log(message,'hey')
        }).catch((err)=>{
            console.log(err,'t')
        })
    }),
    
}