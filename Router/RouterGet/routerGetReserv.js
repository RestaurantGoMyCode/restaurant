const router = require('express').Router()
const getReservation = require('../../Controller/Get/getReserv')
router.get('/api/getReserv',getReservation.getReserv)

module.exports = {routerGetReserv:router}