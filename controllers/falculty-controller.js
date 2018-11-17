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

    if (req.query.falid) {
        const sql =`INSERT INTO FALCULTY VALUES ('${req.query.falid}','${req.query.falname}','${req.query.dean}')`;
        conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('call me',result);
    });
    }
    
    res.render('../views/falculty/falculty-create-view');
}

module.exports.postFalcultyCreate = (req,res) =>{
    
}

module.exports.deleteFalcultyData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM FALCULTY WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

    res.redirect('/falculty/data');
     
};

module.exports.modifyFalcultyData = (req,res) =>{
    res.render('./falculty/falculty-data-modify',{
        data: req.params
    });
};

module.exports.getModifyFalcultyData = (req,res) =>{
    const sql = `UPDATE FALCULTY SET ID = '${req.query.falid}', FalName = '${req.query.falname}', Dean = '${req.query.dean}' WHERE Id = '${req.query.falid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('./data');
}