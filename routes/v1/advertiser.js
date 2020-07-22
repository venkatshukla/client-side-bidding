const express = require('express');
const router = express.Router();
const adversiterHandler = require('../../handlers/advertiser');

router.get('/advertiser/:advertiserId/get-ad', adversiterHandler.getRandomAdForAdversiter);

// router.put('/click/:adId', adversiterHandler.recordConversion);

router.post('/advertisement/create', adversiterHandler.createAdvertisement);

// router.post('/advertiser/create', adversiterHandler.createAdvertiser);

// router.post('/publisher/create', adversiterHandler.createPublisher);

module.exports = router;
