const conn = require('../public/scripts/config');
const find = require('../admin_modules/find');

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
    var sql,
        sort='desc';
    switch (req.query.column) {
        case 'studentid':
            makeSort('studentid',req.query.sort);
            break;
        case 'subjectid':
            makeSort('subjectid',req.query.sort);
            break;
        case 'year':
            makeSort('year',req.query.sort);
            break;
        case 'semester':
            makeSort('semester',req.query.sort);
            break;
        case 'score':
            makeSort('score',req.query.sort);
            break;
        default:
            makeSort('studentid',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM SCORE_RECORD ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM SCORE_RECORD ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/scoreRecord/scoreRecord-data-view',{                
            listScoreRecord: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                
        });
    });    

}

module.exports.getScoreRecordCreate = (req,res) => {
    res.render('../views/scoreRecord/scoreRecord-create-view');
}

module.exports.postScoreRecordCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.studentid && req.body.subjectid) {
        const sql =`INSERT INTO SCORE_RECORD VALUES ('${req.body.subjectid}','${req.body.studentid}','${req.body.year}','${req.body.semester}','${req.body.score}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/scoreRecord/data');
}

module.exports.deleteScoreRecordData = (req,res) =>{
    console.log('ggwp',req.params);
    var tempDelete = req.params.id.split('&');
    const sql = `DELETE FROM SCORE_RECORD WHERE SUBJECTID = '${tempDelete[0]}' AND STUDENTID = '${tempDelete[1]}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/scoreRecord/data');
     
};

module.exports.modifyScoreRecordData = (req,res) =>{
    res.render('./scoreRecord/scoreRecord-modify-view',{
        data: req.params
    });
};

module.exports.postModifyScoreRecordData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE SCORE_RECORD SET SUBJECTID = '${req.body.subjectid}', STUDENTID = '${req.body.studentid}', YEAR = '${req.body.year}' , SEMESTER = '${req.body.semester}', SCORE = '${req.body.score}' WHERE SUBJECTID = '${req.body.subjectid}' AND STUDENTID = '${req.body.studentid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchScoreRecordData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 5;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('score_Record','subjectid',req.query['search-name'])
    .then(result =>{
        res.render('../views/scoreRecord/scoreRecord-data-view',{                
            listScoreRecord: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}