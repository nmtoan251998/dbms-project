const conn = require('../public/scripts/config');
const find = require('../admin_modules/find');

module.exports.getStudentData =  (req,res) => {                
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
        case 'majorid':
            makeSort('majorid',req.query.sort);
            break;
        case 'classid':
            makeSort('classid',req.query.sort);
            break;
        case 'studentname':
            makeSort('studentname',req.query.sort);
            break;
        default:
            makeSort('id',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM STUDENT ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM STUDENT ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/student/student-data-view',{                
            listStudent: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                
        });
    });    

}

module.exports.getStudentCreate = (req,res) => {
    res.render('../views/student/student-create-view');
}

module.exports.postStudentCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.studentid) {
        const sql =`INSERT INTO STUDENT VALUES ('${req.body.studentid}','${req.body.classid}','${req.body.studentname}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/student/data');
}

module.exports.deleteStudentData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM STUDENT WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/student/data');
     
};

module.exports.modifyStudentData = (req,res) =>{
    res.render('./student/student-modify-view',{
        data: req.params
    });
};

module.exports.postModifyStudentData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE STUDENT SET ID = '${req.body.studentid}', ClassId = '${req.body.classid}', StudentName = '${req.body.studentname}' WHERE Id = '${req.body.studentid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchStudentData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 10;       
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('student','studentname',req.query['search-name'])
    .then(result =>{
        res.render('../views/student/student-data-view',{                
            listStudent: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}