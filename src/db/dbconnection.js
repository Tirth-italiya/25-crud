const mongoose = require('mongoose')

const mongooseDB = () => {
    mongoose.connect('mongodb+srv://tirthitaliya122:W8kUnaTkRI9yF0r8@netflix.zdcsu45.mongodb.net/?retryWrites=true&w=majority&appName=Netflix').
    then((res)=>{
        if(res){
            console.log('DATABASE IS CONNECTED...');
        }
    }).catch((err)=>{
        if(err){
            console.log('DATABASE IS NOT-CONNECTED...');
        }
    })
}

module.exports = mongooseDB