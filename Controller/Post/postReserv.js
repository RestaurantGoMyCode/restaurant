const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    postReserv:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO reservation(firstNameClient,lastNameClient,mailClient,phoneClient,adressClient,numberClient)VALUES("${req.body.firstNameClient}","${req.body.lastNameClient}","${req.body.mailClient}","${req.body.phoneClient}","${req.body.adressClient}","${req.body.numberClient}");`
        console.log("query",query)
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("Reservation OK")
        })
    })
}