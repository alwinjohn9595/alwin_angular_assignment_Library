const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const AuthorSchema = new Schema ({
    authorname: String,
    gener: String,
    info: String,
    image : String
    
});



var Authordata = mongoose.model('authordata', AuthorSchema);



module.exports = Authordata;