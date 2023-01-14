const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    updateReserv:((req,res)=>{
        console.log(req.body)
        const query = `UPDATE reservation SET firstNameClient="${req.body.firstNameClient}",lastNameClient="${req.body.lastNameClient}",mailClient="${req.body.mailClient}",phoneClient="${req.body.phoneClient}",numberClient="${req.body.numberClient}" WHERE id="${req.params.id}"`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}


