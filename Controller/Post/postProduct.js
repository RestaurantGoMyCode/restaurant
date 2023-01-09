const {connection}= require('../../ConfigurationDataBase/config')
module.exports = {
    postProduct:((req,res)=>{
        console.log(req.body)
        const query=`INSERT INTO product(name,price,description,image)VALUES("${req.body.name}","${req.body.price}","${req.body.description}","${req.body.image}");`
        console.log("query",query)
        connection.query(query,(error,result)=>{
        error ? res.status(500).send(error) : res.status(200).send("Reservation Product OK")
        })
    })
}