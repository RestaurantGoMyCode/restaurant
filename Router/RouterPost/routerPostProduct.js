const router = require('express').Router()
const postProd = require('../../Controller/Post/postProduct')
router.post('/api/createProduct',postProd.postProduct)

module.exports = {routerPostProduct:router}