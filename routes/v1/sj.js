const express = require('express');
const router = express.Router();
const sjHandler = require('../../handlers/sj');

router.get('/sj/getInvoiceNumber/:pnr', sjHandler.getInvoiceFromPNR);

module.exports = router;
