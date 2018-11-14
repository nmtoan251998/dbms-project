const conn = require('../public/scripts/config');

module.exports.getFalcultyData =  (req,res) => {
    const sql =`SELECT * FROM FALCULTY`;
    let re ;
    conn.query(sql, (err,result)=>{
        if(err) throw err;
        res.render('../views/falculty/falculty-data-view',{
            listFalculty: result
        });
    });
}


module.exports.getFalcultyCreate = (req,res) => {
    console.log(req.query);
    // conn.connect(err=>{
    //     if(err) throw err;
    //     console.log('Connected');

    // });
    const sql =`INSERT INTO FALCULTY VALUES ('${req.query.falid}','${req.query.falname}','${req.query.dean}')`;
    // conn.query(sql,(err,result)=>{
    //     if(err) throw err;
    //     console.log(result);
    // });
    
    res.render('../views/falculty/falculty-create-view');
}

module.exports.postFalcultyCreate = (req,res) =>{
    
}