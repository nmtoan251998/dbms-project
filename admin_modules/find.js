const conn = require('../public/scripts/config');
async function findData(table,column,value){
    const sql = `CALL findAnything('${table}','${column}','${value}');`
    var re;
    
    return new Promise((resolved,reject)=>{
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            resolved(result);
        });
    });
}

module.exports = findData;