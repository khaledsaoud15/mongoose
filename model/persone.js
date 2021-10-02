const mongoose = require('mongoose')
const Schema = mongoose.Schema



const PeopleSchema = new Schema({
    name:{type:String, required:true},
    age:Number,
    favoriteFood:[String]
})
const persone= mongoose.model("People", PeopleSchema)
module.exports = persone
