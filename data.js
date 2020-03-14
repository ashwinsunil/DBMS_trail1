const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username:String,
    password1:String,
    address:String,
    id :Number,
    email :String,
    gender : String,
    vote :Number
});

module.exports =mongoose.model('all',UserSchema,'voter_data');
