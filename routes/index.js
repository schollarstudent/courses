var express = require('express');
var router = express.Router();
const courseController = require('../controllers/courseController');
const studentController = require('../controllers/studentController');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courses',courseController.viewAll);
router.get('/courses/profile/:id', courseController.viewProfile);
router.get('/courses/edit/:id', courseController.renderEditForm);
module.exports = router;
router.post('/courses.edit/:id',courseController.updateCourse);
router.get('/courses/add',courseController.renderAddForm);
router.post('/courses/add', courseController.addCourse);
router.get('/courses/delete/:id', courseController.deleteCourse);


router.get('/students', studentController.viewAll);
router.get('/students/profile/:id', studentController.viewProfile);
router.get('/students/edit',studentController.renderEditForm);
router.post('/student/edit/:id',studentController.updateStudent);
router.get('/students/add',studentController.renderAddForm);
router.post('/students/add',studentController.addStudent);
router.post('/students/:studentId/enroll/', studentController.enrollStudent);
router.get('/students/:studentId/removeCourse/:courseId', studentController.removeCourse);
router.post('/courses/:courseId/enroll',courseController.enrollStudent);
router.get('/courses/:courseId/removeStudent/:studentId',courseController.removeStudent);
module.exports=router;