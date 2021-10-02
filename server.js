const { throws } = require('assert')
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const persone = require("./model/persone")



mongoose.connect(" mongodb://127.0.0.1:27017/people",{
    useNewUrlParser: true,
    useUnifiedTopology:true
})

const db = mongoose.connection;
db.once("open",()=>{
    console.log("opened connection");
})

// const persone1 = new persone ({
//     name:"khaled",
//     age:20,
//     favoriteFood:["pizza","burger","Apple","orange","Tacos"]
// })
// persone1.save((err,doc)=>{
//     if(err) throw err
//     console.log(doc);
// })

const ArrayOfPeople = [
    {
        name:"Hakim",
        age:19,
        favoriteFood:["Kola","orange","bid"]
    },
    {
        name:"bouras",
        age:20,
        favoriteFood:["margeite","burger"]
    },
    {
        name:"chakib",
        age:20,
        favoriteFood:["pizza","burger","Apple","orange","Tacos","margeite"]
    }
]
// persone.create(ArrayOfPeople, (err,data) => {
//     if(err) throw persone(err)
//     else console.log(data);
// })
persone.findById({_id:"6158291c951765437ec7bd73"}).then((doc)=>{
    console.log(doc);
}).catch((err)=>{throw new Error})
app.listen(5000)


// persone.findById({_id:"6158291c951765437ec7bd73"}).then((doc)=>{
//     doc.favoriteFood.push("tikka masala")
//     doc.save()
//     console.log(doc)
// })

// persone.findOneAndUpdate({name:"Hakim"},{age:35},{new:true}).then((doc) => {
//     console.log(doc);
// })


// persone.findByIdAndRemove({_id:"6158291c951765437ec7bd73"}).then((doc) => {
//     console.log(doc);
// })

// persone.remove({name:"Hakim"}).then((doc) => {
//     console.log(doc);
// }).catch((err) => {throw new Error(err)})

// persone.find({name:"Hakim"}).then((doc) => {console.log(doc);}).catch((err) => {throw new Error(err)})

persone.findOneAndRemove({name:"bouras"}).then((doc) => {console.log(doc);}).catch((err) => {throw new Error(err)})