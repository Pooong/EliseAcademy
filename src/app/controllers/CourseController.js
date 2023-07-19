
// const Course = require('../models/course.js');

// const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');


class CourseController{
    
    show(req,res){
        res.send('Course detail');
    }
}

module.exports = new CourseController;
