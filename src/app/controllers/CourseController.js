import Course from "../models/course";

var ObjectId = require("mongoose").Types.ObjectId;

const {multipleMongooseToObject, mongooseToObject} = require('../../util/mongoose.js');

class CourseController{ 
    //Create Course [GET]
    create(req,res,next){
        res.render('courses/create')
    }
    //  [POST] /courses/store create
    async store(req,res,next){
        try {
            const {name,description,image,videoId,level} = req.body;
            // console.log({name,description,image,videoId,level})
            const newCourse = await Course.create({
                name: name,
                description: description,
                image: image,
                videoId: videoId,
                level: level,
            });

            res.redirect('/')
            
        } catch (error) {
             console.log(error)
             return res.status(401).json('loi roi');      
        }
    }   
     async show(req,res){
        try{
            const course = await Course.findOne({slug:req.params.slug})
                res.render('courses/show',course)
        }catch (error) {
            res.send('ERROR PAGE')
            }          
    }

    //edit Course [POST] course/:id/update
    edit(req,res,next){
        Course.findById(req.params._id)
            .then(course=>res.render('courses/edit',{
                course:mongooseToObject(course)
            }))

            .catch(next)
    }

    //update Course POST -> [PUT] course/:id
    async update(req,res,next){
        // res.json(req.body)
        // console.log(req.params._id)
        try {
            const idUpdate = req.params._id;
            const {name,image,description,videoId,level} = req.body;
            if(idUpdate){
                const dataUpdate = await Course.findByIdAndUpdate(idUpdate,{name,image,description,videoId,level} );
                if(dataUpdate)
                    res.redirect('/me/stored/courses')
            }
            return res.json('failed')

        } catch (error) {
            console.log(error)
        }

    }

    //[DELETE]
    async delete(req,res,next){
        try {
            const idDelete = req.params._id;
            console.log(idDelete)
            if(idDelete){
                const dataDelete = await Course.delete({_id: idDelete});
                res.redirect('back')
            }
            else
                res.json('Chúc bạn may lần sau')
        } catch (error) {
            console.log(error)
        }
    }
    

    
  
}

module.exports = new CourseController;
