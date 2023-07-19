
const Course = require('../models/course.js');

const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');


class SiteController{
    //[GET] /news

        home(req,res,next){ 
            Course.find({})
                .then(courses => {
                    res.render('home',{
                        courses:multipleMongooseToObject(courses),
                    });
                })
                .catch(next);

        }

        search(req,res){
            res.render('search');
        }
    }

module.exports = new SiteController;
