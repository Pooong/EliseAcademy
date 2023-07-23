const express = require('express');
const router = express.Router();

import courseController from '../app/controllers/CourseController'


router.get('/create',courseController.create);
router.post('/store',courseController.store);

router.get('/:_id/edit',courseController.edit);

router.post('/:_id',courseController.update);
router.post('/delete/:_id',courseController.delete);


router.get('/:slug',courseController.show);


module.exports=router;


