const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    updateProduct:((req,res)=>{
        console.log(req.body)
        const query = `UPDATE product SET name="${req.body.name}",price="${req.body.price}",description="${req.body.description}",image="${req.body.image}" WHERE id="${req.params.id}"`
        connection.query(query,(error,result)=>{
            error ? res.status(500).send(error) : res.status(200).send(result)
        })
    })
}

