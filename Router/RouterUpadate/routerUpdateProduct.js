const router = require('express').Router()
const updateProd = require('../../Controller/Update/updateProduct')
router.put('/api/updateProduct',updateProd.updateProduct)

module.exports = {routerUpdateProduct:router}