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
    let itemPerPage = parseInt(req.query.data) || 5;


    console.log({currentPage,itemPerPage})
    
    let begin = (currentPage-1) * itemPerPage;
    let end = currentPage* itemPerPage ;
    
    const sql =`SELECT * FROM FALCULTY`;
    
    conn.query(sql, (err,result) => {
        if(err) throw err;                    
        res.render('../views/falculty/falculty-data-view',{                
            listFalculty: result.slice(begin, end),
            currentPage : currentPage            
        });
    });    

}

module.exports.getFalcultyCreate = (req,res) => {
    // console.log(req.query);
    // conn.connect(err=>{
    //     if(err) throw err;
    //     console.log('Connected');

    // })
    const sql =`INSERT INTO FALCULTY VALUES ('${req.query.falid}','${req.query.falname}','${req.query.dean}')`;
    // conn.query(sql,(err,result)=>{
    //     if(err) throw err;
    //     console.log(result);
    // });
    
    res.render('../views/falculty/falculty-create-view');
}

module.exports.postFalcultyCreate = (req,res) =>{
    
}