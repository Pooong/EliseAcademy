
// const Course = require('../models/course');
import Course from '../models/course';

const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');


class MeController{
    showStored(req,res,next) {
        Course.find({})
            .then(courses =>res.render('me/stored-courses',{
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
        }
    
    trashCouses(req,res,next) {
        Course.findDeleted({})
            .then(courses =>res.render('me/trash-courses',{
                courses: multipleMongooseToObject(courses)
            }))
            .catch(next)
        }    
    }

module.exports = new MeController();
