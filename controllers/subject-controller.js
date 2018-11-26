const conn = require('../public/scripts/config');
const find = require('../admin_modules/find');

module.exports.getSubjectData =  (req,res) => {                
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
        case 'id':
            makeSort('id',req.query.sort);
            break;
        case 'majorid':
            makeSort('majorid',req.query.sort);
            break;
        case 'subjectname':
            makeSort('subjectname',req.query.sort);
            break;
        case 'credit':
            makeSort('credit',req.query.sort);
            break;
        default:
            makeSort('id',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM SUBJECT ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM SUBJECT ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/subject/subject-data-view',{                
            listSubject: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                
        });
    });    

}

module.exports.getSubjectCreate = (req,res) => {
    res.render('../views/subject/subject-create-view');
}

module.exports.postSubjectCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.subjectid) {
        const sql =`INSERT INTO SUBJECT VALUES ('${req.body.subjectid}','${req.body.majorid}','${req.body.subjectname}','${req.body.credit}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/subject/data');
}

module.exports.deleteSubjectData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM SUBJECT WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/subject/data');
     
};

module.exports.modifySubjectData = (req,res) =>{
    res.render('./subject/subject-modify-view',{
        data: req.params
    });
};

module.exports.postModifySubjectData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE SUBJECT SET ID = '${req.body.subjectid}', MajorId = '${req.body.majorid}', SubjectName = '${req.body.subjectname}' , Credit = '${req.body.credit}'WHERE Id = '${req.body.subjectid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchSubjectData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 5;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('subject','subjectname',req.query['search-name'])
    .then(result =>{
        res.render('../views/subject/subject-data-view',{                
            listSubject: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}