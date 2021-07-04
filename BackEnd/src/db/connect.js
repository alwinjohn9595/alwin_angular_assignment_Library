

const mongoose = require('mongoose');
const url = 'mongodb://localhost:27017/ProductDB';
mongoose.connect(url,
    {   useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection is successful");
    }).catch((e)=>{
        console.log("No connection");
    })