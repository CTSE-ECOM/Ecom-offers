const Offer = require('../models/offer.model');

exports.createOffer = (req,res) => {
    const {
        offerID,name,details,validPeriod
    } = req.body;
  
    const offer = new Offer({
        offerID,
        name,
        details,
        validPeriod
    });
   
    offer.save(((error, Offer)=> { 
        if (error) return res.status(400).json({ error });
       
        if (Offer) {
            res.status(201).json({ Offer });
            console.log("save");
        }
    }));  
}

exports.getall=async(req,res)=>{
    await Offer.find({})
    .then(data=>{
       res.status(200).send({data:data});
       
   }).catch(err=>{
       res.status(500).send({error:err.massage})
       console.log("err");
   });
       
   }

exports.getOffer = (req, res) => {
    Offer.find({}).exec((error, Offer) => {
        if (error) return res.status(400).json({ error });
        if (Offer) {
            const offerList = createBooking(Offer)
            return res.status(201).json({ offerList });
        }
    });
}

exports.updateOffer = (req, res) => {

    const {
        offerID,
        name,
        details,
        validPeriod
    } = req.body;
  
    console.log(" id", req.params._id)

    Offer.findByIdAndUpdate(req.params._id, { $set: {  offerID:offerID ,name: name,details:details, validPeriod:validPeriod}},      
        { 
            new: true
        })
        .catch((err) => {
            console.log(err);
        })
};

exports.deleteById = (req, res) => {
    const { offerID } = req.params._id;
    console.log(req.params._id)
    if (req.params._id) {
        Offer.deleteOne({ _id: req.params._id }).exec((error, result) => {
        if (error) return res.status(400).json({ error });
        if (result) {
          res.status(202).json({ result });
        }
      });
    } else {
      res.status(400).json({ error: "Params required" });
    }
  };

exports.getOfferbyid=async(req,res)=>{
    if(req.params && req.params.offerID){
        console.log(req.params.Offer)

        await  Offer.findById(req.params.offerID)
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
        
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });
    }
    
  };

exports.getOfferbyofferID=async(req,res)=>{
    const offerID= req.body.offerID;
        await  Offer.findOne({offerID:offerID})
        .then(data => {
            console.log(data);
           res.status(200).send({ data: data });
           
       }).catch(err=>{
           res.status(400).send({error:err.massage})
       });  
  }