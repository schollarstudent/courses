const {Course} = require('../models')

//view all
module.exports.viewAll = async function (req,res){
    const courses = Course.findAll();
    res.render('course/view_all',{courses});
}

//profile

//render add form

//add

//render edit form

//update

//delete