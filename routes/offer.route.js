router=require("express").Router();
const {createOffer,getall,updateOffer,deleteById,getOfferbyofferID,getOfferbyid} = require('../controller/offer.controller');

router.post('/create/offer', createOffer);
router.get('/offer/getall',getall);
router.put('/offer/edit/:_id',updateOffer);
router.delete('/offer/del/:_id',deleteById);
router.post('/offer/search',getOfferbyofferID);
router.get('/offer/getbyID/:_id',getOfferbyid);

module.exports = router;