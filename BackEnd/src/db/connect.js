

const mongoose = require('mongoose');
const url = 'mongodb+srv://userone:userone@ictakfiles.pf4oc.mongodb.net/AngularLibrary?retryWrites=true&w=majority';

mongoose.connect(url,
    {   useCreateIndex:true,
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{
        console.log("Connection is successful");
    }).catch((e)=>{
        console.log("No connection");
    })