const router = require('express').Router();
const mailControler = require('../Controller/Post/mail');
router.post('/api/mail', mailControler.nodmail);

module.exports = {routerMail:router};