const express = require('express');
const mongoose = require('mongoose');
const app=express();

const offer_route = require('./routes/offer.route');

const username = "minoliR";
const password = "7MTwVI2h7L2gOid0";
const dbname = "Offers";

app.use(express.json());
app.use(express());

//db connection
mongoose.connect(
    `mongodb+srv://${username}:${password}@minolicluster.gya2y.mongodb.net/${dbname}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const db = mongoose.connection;
db.on("error",()=> {console.log("Error connect to db")});
db.once("open", function(){
    console.log("Success")
});

//routes
app.use('/api',offer_route);

app.listen(3000,()=>{
    console.log('server running')
})


