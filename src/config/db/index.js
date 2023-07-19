const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/elise_course_dev',{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('Connect Success')
    } catch (error) {
        console.log('Connect Failed')
    }

}

module.exports = {connect} ;