const router = require('express').Router()
const deleteReservation = require('../../Controller/Delete/deleteReserv')
router.delete('/api/deleteReserv',deleteReservation.deleteReserv)

module.exports = {routerDeleteReserv:router}