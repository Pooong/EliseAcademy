
// const Course = require('../models/course');
import Course from '../models/course.js';

const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');


class LearningController{
    //[GET] /news

        home(req,res,next){ 
           
            Course.find({})
                .then(courses => {
                    res.render('learning',{
                        courses:multipleMongooseToObject(courses),
                    });
                })
                .catch(next);

        }

        search(req,res){
            res.render('search');
        }
    }

module.exports = new LearningController;
