const conn = require('../public/scripts/config');
const find = require('../admin_modules/find')
module.exports.getMajorData =  (req,res) => {                
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
        case 'falid':
            makeSort('falid',req.query.sort);
            break;
        case 'majorname':
            makeSort('majorname',req.query.sort);
            break;
        default:
            makeSort('id',req.query.sort);
            break;
    }
    
    function makeSort(column,state){
        if(state === 'desc'){
            sql =`SELECT * FROM MAJOR ORDER BY ${column} DESC`;
            sort='asc'
        }
        else{
            sql =`SELECT * FROM MAJOR ORDER BY ${column} ASC`;
        }
    }
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/major/major-data-view',{                
            listMajor: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage,
            total: result.length,
            sort: sort                   
        });
    });    

}

module.exports.getMajorCreate = (req,res) => {
    res.render('../views/major/major-create-view');
}

module.exports.postMajorCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.majorid) {
        const sql =`INSERT INTO MAJOR VALUES ('${req.body.majorid}','${req.body.falcultyid}','${req.body.majorname}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.redirect('/major/data');
}

module.exports.deleteMajorData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM MAJOR WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/major/data');
     
};

module.exports.modifyMajorData = (req,res) =>{
    res.render('./major/major-modify',{
        data: req.params
    });
};

module.exports.postModifyMajorData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE MAJOR SET ID = '${req.body.majorid}', FalId = '${req.body.falid}', MajorName = '${req.body.majorname}' WHERE Id = '${req.body.majorid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}

module.exports.getSearchMajorData = (req,res) =>{
    let currentPage = parseInt(req.query.page) || 1;
    let itemPerPage = parseInt(req.query.size) || 10;        
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;

    find('major','majorname',req.query['search-name'])
    .then(result =>{
        res.render('../views/major/major-data-view',{                
            listMajor: result[0],
            page : currentPage,
            item : itemPerPage,
            total: result[0].length                
        });
    });  
}