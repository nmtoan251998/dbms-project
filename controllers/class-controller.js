const conn = require('../public/scripts/config');
const find = require('../admin_modules/find');

module.exports.getClassData =  (req,res) => {                
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
        case 'classname':
            makeSort('classname',req.query.sort);
            break;
        case 'headteacher':
            makeSort('headteacher',req.query.sort);
            break;
        default:
            makeSort('id',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM CLASS ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM CLASS ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/class/class-data-view',{                
            listClass: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                
        });
    });    

}

module.exports.getClassCreate = (req,res) => {
    res.render('../views/class/class-create-view');
}

module.exports.postClassCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.classid) {
        const sql =`INSERT INTO CLASS VALUES ('${req.body.classid}','${req.body.majorid}','${req.body.classname}','${req.body.headteacher}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/class/data');
}

module.exports.deleteClassData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM CLASS WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/class/data');
     
};

module.exports.modifyClassData = (req,res) =>{
    res.render('./class/class-modify-view',{
        data: req.params
    });
};

module.exports.postModifyClassData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE CLASS SET ID = '${req.body.classid}', MajorId = '${req.body.majorid}', ClassName = '${req.body.classname}' , Headteacher = '${req.body.headteacher}'WHERE Id = '${req.body.classid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchClassData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 10;    
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('class','classname',req.query['search-name'])
    .then(result =>{
        res.render('../views/class/class-data-view',{                
            listClass: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}