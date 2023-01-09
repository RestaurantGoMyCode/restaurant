const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    getProduct:((req,res)=>{
        console.log(req.body)
        const query= "select * from product"
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}