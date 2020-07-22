
async function createAdvertisement(req, res){
    try {
        const app = req.app;
        const createdAd = await app.locals.services.advertisement.createAdvertisement({data: req.body});
        return res.status(200).json({
            createdAd
        });
    } catch (error) {
        req.log.info({error});
        return res.status(400).json({
            error
        });
    }
}

async function getRandomAdForAdversiter(req, res){
    try {
        const app = req.app;
        const createdAd = await app.locals.services.advertisement.getAdvertisementByAdvertiserId({advertiser: req.params.advertiserId});
        return res.status(200).json({
            createdAd
        });
    } catch (error) {
        req.log.info({error});
        return res.status(400).json({
            error
        });
    }
}

module.exports = {
    createAdvertisement,
    getRandomAdForAdversiter
};