const mongoose = require('mongoose');
const schema =mongoose.Schema;

const offerSchema=new schema(
    {
       
    offerID: {
        type: String,
        required:true
    },
     name: {
        type: String,
        required:true
    },
    details: {
        type: String,
        required: true,
    },
    validPeriod:{
        type: String,
        required: true,
     }
    },{timestamps:true}
    );

const Offer =mongoose.model("Offer",offerSchema);
module.exports=Offer;