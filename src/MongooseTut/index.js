var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/HarryKart',{useNewUrlParser:true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));

db.once('open',function(){
    console.log("We are connected bro/sis")
});

