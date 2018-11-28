const conn = require('../public/scripts/config');
const find = require('../admin_modules/find');
const date = require('date-and-time');

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
    var sql,
        sort='desc';
    switch (req.query.column) {
        case 'id':
            makeSort('id',req.query.sort);
            break;
        case 'dob':
            makeSort('dob',req.query.sort);
            break;
        case 'gender':
            makeSort('gender',req.query.sort);
            break;
        case 'city':
            makeSort('city',req.query.sort);
            break;
        case 'address':
            makeSort('address',req.query.sort);
            break;
        default:
            makeSort('id',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM STUDENT_DETAIL ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM STUDENT_DETAIL ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;    
        for(x of result){
            x['DoB'] = date.format(x['DoB'],'YYYY-MM-DD');
        }                
        res.render('../views/studentDetail/studentDetail-data-view',{                
            listStudentDetail: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                
        });
    });    

}

module.exports.getStudentDetailCreate = (req,res) => {
    res.render('../views/studentDetail/studentDetail-create-view');
}

module.exports.postStudentDetailCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.studentid) {
        const sql =`INSERT INTO STUDENT_DETAIL VALUES ('${req.body.studentid}','${req.body.dob}','${req.body.gender}','${req.body.city}','${req.body.address}','${req.body.phone}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/studentDetail/data');
}

module.exports.deleteStudentDetailData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM STUDENT_DETAIL WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/studentDetail/data');
     
};

module.exports.modifyStudentDetailData = (req,res) =>{
    res.render('./studentDetail/studentDetail-modify-view',{
        data: req.params
    });
};

module.exports.postModifyStudentDetailData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE STUDENT_DETAIL SET ID = '${req.body.studentid}', DoB = '${req.body.dob}', Gender = '${req.body.gender}' , City = '${req.body.city}', Address = '${req.body.address}', Phone = '${req.body.phone}' WHERE Id = '${req.body.studentid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchStudentDetailData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 5;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('student_detail','id',req.query['search-name'])
    .then(result =>{
        result[0][0]['DoB'] = date.format(result[0][0]['DoB'],'YYYY-MM-DD');
        res.render('../views/studentDetail/studentDetail-data-view',{                
            listStudentDetail: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}