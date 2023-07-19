const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type : String, maxLength: 255},
    description: {type : String, maxLength: 255},
    image: {type: String, maxLength: 255},
    createdAt :{type: Date, default: Date.now}, // luu thoi gian duoc tao
    updatedAt :{type: Date, default: Date.now}, // luu thoi gian cap nhat
  });

module.exports = mongoose.model('Course', Course)