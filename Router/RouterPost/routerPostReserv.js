const router = require('express').Router()
const postReservation = require('../../Controller/Post/postReserv')
router.post('/api/createReserv',postReservation.postReserv)

module.exports = {routerPostReserv:router}