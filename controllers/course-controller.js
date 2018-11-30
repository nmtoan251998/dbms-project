const conn = require('../public/scripts/config');
const date = require('date-and-time');
const find = require('../admin_modules/find');

module.exports.getCourseCreate = (req,res) => {
    res.render('../views/course/course-create-view');
}

module.exports.getCourseData =  (req,res) => {                
    // PAGINATION    
    /* Simulation 
        
    begin = (n-1)*x
    end = n*x

    with:
    n: total page
    x: total item per page
    */

    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 10;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;
    
    var sql,
        sort='desc';
    switch (req.query.column) {
        case 'id':
            makeSort('id',req.query.sort);
            break;
        case 'coursename':
            makeSort('coursename',req.query.sort);
            break;
        case 'startyear':
            makeSort('startyear',req.query.sort);
            break;
        case 'endyear':
            makeSort('endyear',req.query.sort);
            break;
        default:
            makeSort('id',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM COURSE ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM COURSE ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;  
        for(x of result){
            x['StartYear'] = date.format(x['StartYear'],'MM-DD-YYYY');
            x['EndYear'] = date.format(x['EndYear'],'MM-DD-YYYY');
        }                  
        res.render('../views/course/course-data-view',{                
            listCourse: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                   
        });
    });    

}

module.exports.postCourseCreate = (req,res) => {
    res.render('../views/course/course-create-view');
}

module.exports.postCourseCreate = (req,res) => {
    console.log(req.body)
    if (req.body.courseid) {
        const sql =`INSERT INTO COURSE VALUES ('${req.body.courseid}','${req.body.coursename}','${req.body.start}','${req.body.end}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/course/data');
}

module.exports.deleteCourseData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM COURSE WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/course/data');
     
};

module.exports.modifyCourseData = (req,res) =>{
    res.render('./course/course-modify-view',{
        data: req.params
    });
};

module.exports.postModifyCourseData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE COURSE SET ID = '${req.body.courseid}',CourseName = '${req.body.coursename}', StartYear = '${req.body.startyear}', endyear ='${req.body.endyear}'  WHERE ID = '${req.body.courseid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchCourseData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 10;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('course','coursename',req.query['search-name'])
    .then(result =>{
        result[0][0]['StartYear'] = date.format(result[0][0]['StartYear'],'YYYY');
        result[0][0]['EndYear'] = date.format(result[0][0]['EndYear'],'YYYY');
        res.render('../views/course/course-data-view',{                
            listCourse: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}
module.exports.getCourseModify = (req,res) => {
    res.render('../views/course/course-modify-view');
}