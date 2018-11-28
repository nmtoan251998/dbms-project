const conn = require('../public/scripts/config');

module.exports.getFunctions =  (req,res) => {   
    res.render('../views/higher-order/functions-view');
}


// ====================================
module.exports.getAvgPoint = (req,res) => {
    var avg;
    if(req.query['student-code']){
        const sql = `select avgWithStudentIdYearAndSemester('${req.query['student-code']}',${req.query.year},${req.query.semester}) as avg;`
        conn.query(sql,(err,result)=>{
            avg = result[0].avg;
            res.render('../views/higher-order/avg-point-view',{
                data_avg: avg
            })
        })
    }
    else
        res.render('../views/higher-order/avg-point-view',{
            data: avg
        })
}

module.exports.getBadStu = (req,res) => {
    if(req.query.year){
        const sql = `CALL filterAcademicWarning(${req.query.year},${req.query.semester});`
        conn.query(sql,(err,result)=>{
            res.render('../views/higher-order/bad-stu-view',{
                data_bad_stu: result[0].length
            })
        })
    }
    else
    res.render('../views/higher-order/bad-stu-view')
}

module.exports.getFailedSubject = (req,res) => {
    
    if(req.query['major-name']){
        const sql = `CALL showBadSubjectWithMajorNamePerSemester('${req.query['major-name']}',${req.query.year},${req.query.semester});`
        conn.query(sql,(err,result)=>{
            res.render('../views/higher-order/failed-subject-view',{
                data_fail_sub: result[0][0].SubjectName
            })
        })
    }
    else
        res.render('../views/higher-order/failed-subject-view')
}

module.exports.getFullStuInfo = (req,res) => {
    if(req.query['student-code']){
        const sql = `CALL showFullStudentInfo('${req.query['student-code']}');`
        conn.query(sql,(err,result)=>{
            res.render('../views/higher-order/full-stu-info-view',{
                data_stu_info_stu: result[0][0].STUDENTNAME,
                data_stu_info_class: result[0][0].CLASSNAME,
                data_stu_info_major: result[0][0].MAJORNAME,
                data_stu_info_falname: result[0][0].FALNAME,
            })
        })
    }
    else
        res.render('../views/higher-order/full-stu-info-view')
}


module.exports.getStuScho = (req,res) => {
    if(req.query['falculty-name']){
        const sql = `CALL showTop2FalcultyStudent('${req.query['falculty-name']}',${req.query.year},${req.query.semester});`
        conn.query(sql,(err,result)=>{
            if (err) throw err;
            res.render('../views/higher-order/stu-scho-view',{
                data_stu_scho: result[0]
            })
        })
    }
    else
        res.render('../views/higher-order/stu-scho-view')
}

module.exports.getTotalStudent = (req,res) => {
    if(req.query['falculty-name']){
        const sql = `SELECT getTotalStudentWithFalcultyName('${req.query['falculty-name']}') AS total;`
        conn.query(sql,(err,result)=>{
            if (err) throw err;
            res.render('../views/higher-order/total-stu-view',{
                data_total_student: result[0].total
            })
        })
    }
    else
        res.render('../views/higher-order/total-stu-view')
}