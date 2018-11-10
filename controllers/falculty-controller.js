const conn = require('../public/scripts/config');

module.exports.getFalcultyData = (req,res) => {
    res.render('../views/falculty/falculty-data-view')
}

module.exports.getFalcultyCreate = (req,res) => {
    console.log(req.query);
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