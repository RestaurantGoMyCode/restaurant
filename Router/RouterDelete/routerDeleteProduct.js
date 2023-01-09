const router = require('express').Router()
const deleteProd = require('../../Controller/Delete/deleteProduct')
router.delete('/api/deleteProduct',deleteProd.deleteProduct)

module.exports = {routerDeleteProduct:router}