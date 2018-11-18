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
    res.render('../views/falculty/falculty-create-view');
}

module.exports.postFalcultyCreate = (req,res) =>{
    console.log(req.body)
    if (req.body.falid) {
        const sql =`INSERT INTO FALCULTY VALUES ('${req.body.falid}','${req.body.falname}','${req.body.dean}')`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            console.log('call me',result);
        });
    }
    res.render('../views/falculty/falculty-create-view');
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

module.exports.postModifyFalcultyData = (req,res) =>{
    console.log(req.body)
    const sql = `UPDATE FALCULTY SET ID = '${req.body.falid}', FalName = '${req.body.falname}', Dean = '${req.body.dean}' WHERE Id = '${req.body.falid}'`;
   
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });

    res.redirect('../data');
}