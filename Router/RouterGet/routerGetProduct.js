const router = require('express').Router()
const getProd = require('../../Controller/Get/getProduct')
router.get('/api/getProduct',getProd.getProduct)

module.exports = {routerGetProduct:router}