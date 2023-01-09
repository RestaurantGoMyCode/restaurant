const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    getReserv:((req,res)=>{
        console.log(req.body)
        const query= "select * from reservation"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}