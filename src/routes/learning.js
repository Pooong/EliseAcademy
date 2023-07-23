const express = require('express');
const router = express.Router();

import learningController from '../app/controllers/LearningController'

router.get('/',learningController.home);




module.exports=router;


