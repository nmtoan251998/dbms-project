const conn = require('../public/scripts/config');

module.exports.getStudentDetailData =  (req,res) => {                
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
    
    const sql =`SELECT * FROM STUDENT_DETAIL`;
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/studentDetail/studentDetail-data-view',{                
            listFalculty: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage                
        });
    });    

}

module.exports.getStudentDetailCreate = (req,res) => {
    res.render('../views/studentDetail/studentDetail-create-view');
}