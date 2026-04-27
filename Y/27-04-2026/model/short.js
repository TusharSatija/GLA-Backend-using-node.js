let mongoose=require('mongoose');
const shortid = require('shortid');
let shortschema= new mongoose.Schema({
    url:{
        type:String,
        require:true
    },
    shorturl:{
        type:String,
        require:true,
        default:shortid.generate
    }
});
let short=mongoose.model('short',shortschema);
module.exports=short;