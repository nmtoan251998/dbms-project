const conn = require('../public/scripts/config');

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
    let itemPerPage = parseInt(req.query.size) || 5;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;
    
    const sql =`SELECT * FROM COURSE`;
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/course/course-data-view',{                
            listFalculty: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage                
        });
    });    

}

module.exports.getCourseCreate = (req,res) => {
    res.render('../views/course/course-create-view');
}

module.exports.getCourseModify = (req,res) => {
    res.render('../views/course/course-modify-view');
}