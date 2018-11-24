const conn = require('../public/scripts/config');

module.exports.getScoreRecordData =  (req,res) => {                
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
    
    const sql =`SELECT * FROM SCORE_RECORD`;
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/scoreRecord/scoreRecord-data-view',{                
            listFalculty: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage                
        });
    });    

}

module.exports.getScoreRecordCreate = (req,res) => {
    res.render('../views/scoreRecord/scoreRecord-create-view');
}

module.exports.getScoreRecordModify = (req,res) => {
    res.render('../views/scoreRecord/scoreRecord-modify-view');
}