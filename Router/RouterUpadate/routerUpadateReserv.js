const router = require('express').Router()
const updateReservation = require('../../Controller/Update/updateReserv')
router.put('/api/updateReserv',updateReservation.updateReserv)

module.exports = {routerUpdateReserv:router}