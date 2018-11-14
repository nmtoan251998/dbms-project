const conn = require('../public/scripts/config');

module.exports.getFalcultyData =  (req,res) => {                
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
    
    const sql =`SELECT * FROM FALCULTY`;
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/falculty/falculty-data-view',{                
            listFalculty: result.slice(begin, end),
            page : currentPage,
            item : itemPerPage                
        });
    });    

}

module.exports.getFalcultyCreate = (req,res) => {
<<<<<<< HEAD
    console.log(req.query);
=======
    // console.log(req.query);
>>>>>>> 035b885c32b52496f887232f60a5b85ac3969cfc
    // conn.connect(err=>{
    //     if(err) throw err;
    //     console.log('Connected');

<<<<<<< HEAD
    // });
=======
    // })
>>>>>>> 035b885c32b52496f887232f60a5b85ac3969cfc
    const sql =`INSERT INTO FALCULTY VALUES ('${req.query.falid}','${req.query.falname}','${req.query.dean}')`;
    // conn.query(sql,(err,result)=>{
    //     if(err) throw err;
    //     console.log(result);
    // });
    
    res.render('../views/falculty/falculty-create-view');
}

module.exports.postFalcultyCreate = (req,res) =>{
    
}