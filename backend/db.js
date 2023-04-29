const mongoose = require('mongoose');

const URL = 'mongodb+srv://shivam:shivam22@cluster0.h3wdoi5.mongodb.net/loginpage?retryWrites=true&w=majority'

const mongo = async () => {
     
    mongoose.connect(URL,{
            useNewUrlParser:true
        }).then(()=>{
            console.log("connected to database")
        }).catch(e =>console.log(e))
}

module.exports = mongo;