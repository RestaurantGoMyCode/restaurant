const express = require('express')
const app = express()
const port = 3003
const cors = require('cors')
const cookieParser = require('cookie-parser')
// require routerPost
const {routerPostReserv}=require('./Router/RouterPost/routerPostReserv')
const {routerPostProduct}=require('./Router/RouterPost/routerPostProduct')

// require routerGet
const {routerGetReserv}=require('./Router/RouterGet/routerGetReserv')
const {routerGetProduct}=require('./Router/RouterGet/routerGetProduct')

// require routerDelete
const {routerDeleteReserv}=require('./Router/RouterDelete/routerDeleteReserv')
const {routerDeleteProduct}=require('./Router/RouterDelete/routerDeleteProduct')

// require routerUpdate
const {routerUpdateReserv}=require('./Router/RouterUpadate/routerUpadateReserv')
const {routerUpdateProduct}=require('./Router/RouterUpadate/routerUpdateProduct')



app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:false,
        optionsSuccessStatus:200
    })
)


app.use(express.json())

// routerPost
app.use('/',routerGetReserv)
app.use('/',routerPostProduct)

// routerGet
app.use('/',routerPostReserv)
app.use('/',routerGetProduct)

// routerDelete
app.use('/',routerDeleteReserv)
app.use('/',routerDeleteProduct)

// routerUpdate
app.use('/',routerUpdateReserv)
app.use('/',routerUpdateProduct)

app.listen(port, ()=>{
    console.log('http://localhost:'+port)
    console.log('server is alive')
})