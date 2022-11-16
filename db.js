let config = require('./config')
let mongoose = require('mongoose')
mongoose.connect(`mongodb://127.0.0.1/test${config.DB}`);

let db = mongoose.connection;
db.on('error',err=>{
    console.log(err);
})
db.once('open',()=>{
    console.log("mongodb connect success")
})
