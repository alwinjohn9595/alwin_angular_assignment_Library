const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const BookSchema = new Schema ({
    title : String,
    author : String,
    gener : String,
    image : String
    
});



var Bookdata = mongoose.model('bookdata', BookSchema);



module.exports = Bookdata;