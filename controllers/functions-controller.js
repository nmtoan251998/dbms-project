const conn = require('../public/scripts/config');

module.exports.getFunctions =  (req,res) => {   
    res.render('../views/higher-order/functions-view');
}


// ====================================
module.exports.getAvgPoint = (req,res) => {
    res.render('../views/higher-order/avg-point-view')
}

module.exports.getBadStu = (req,res) => {
    res.render('../views/higher-order/bad-stu-view')
}

module.exports.getFailedSubject = (req,res) => {
    res.render('../views/higher-order/failed-subject-view')
}

module.exports.getFullStuInfo = (req,res) => {
    res.render('../views/higher-order/full-stu-info-view')
}

module.exports.getMostLeastScho = (req,res) => {
    res.render('../views/higher-order/most-least-scho-view')
}

module.exports.getStuScho = (req,res) => {
    res.render('../views/higher-order/stu-scho-view')
}

module.exports.getTotalStudent = (req,res) => {
    res.render('../views/higher-order/total-stu-view')
}