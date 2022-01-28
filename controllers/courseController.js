const {Course} = require('../models')
const departments = ['Math', 'English', 'Music', 'Art', 'PE', 'World Languages', 'Social Studies', 'Science'].sort();
//view all
module.exports.viewAll = async function (req,res){
    const courses = await Course.findAll();
    res.render('course/view_all',{courses});
}

//profile
module.exports.viewProfile= async function (req,res){
    const course = await Course.findByPk(req.params.id);
    res.render('course/profile',{course})
}

//render add form

//add

//render edit form
module.exports.renderEditForm = async function(req, res){
    const course = await Course.findByPk(req.params.id);
    res.render('course/edit', {course,departments});
}
//update

//delete