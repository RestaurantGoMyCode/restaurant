const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    deleteProduct:((req,res)=>{
        console.log(req.body)
        const query= `DELETE FROM product WHERE id="${req.params.id}" `
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send("poduct is deleted")
        })
    })
}