import mongoose from 'mongoose';
const { Schema, models } = mongoose;
import slug from 'slug';

const CourseSchema = new Schema({
    name: {type : String, maxLength: 255},
    description: {type : String},
    videoId: {type: String, maxLength: 255},
    image: {type: String},
    level: {type: String, maxLength: 255},
    slug : {type: String},
  },{
    timestamps : true,
  });
  
  CourseSchema.pre('save',function (next) {
    const nameSlug = slug(this.name)
      this.slug = nameSlug;
    next()

  })
  
  //Soft deleted
  const mongooseDelete = require('mongoose-delete');
  CourseSchema.plugin(mongooseDelete, { 
    deletedAt: true,
    overrideMethods: true ,
    
  }); //{} de hien thi danh sach cac doc chua bi xoa




  const Course = models.Course || mongoose.model("Course", CourseSchema);

export default Course;