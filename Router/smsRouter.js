const router = require('express').Router()
const getControler = require('../Controller/Post/postReserv')
router.post('/api/getsms',getControler.sendSms)

module.exports = {smsraouter:router}