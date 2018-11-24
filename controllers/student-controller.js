const conn = require('../public/scripts/config');
module.exports.getStudentData = (req,res) => {
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
   
   const sql =`SELECT * FROM STUDENT`;
   
   conn.query(sql, (err,result) => {
       if(err) throw err;   
       console.log(result);                 
       res.render('../views/student/student-data-view',{                
           listMajor: result.slice(begin, end),
           page : currentPage,
           item : itemPerPage                
       });
   });    
    
}

module.exports.getStudentCreate = (req,res) => {
    const sql =`INSERT INTO STUDENT VALUES ('${req.query.majorid}','${req.query.falid}','${req.query.majorname}')`;
    conn.query(sql,(err,result)=>{
        if(err) throw err;
        console.log(result);
    });
    
    res.render('../views/major/major-create-view')
}

module.exports.deleteMajorData = (req,res) =>{
    console.log('ggwp',req.params);
    const sql = `DELETE FROM MAJOR WHERE ID = '${req.params.id}'`;
    conn.query(sql,(err,result)=>{
        if (err) throw err;
        console.log(result);   
    });

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
   

   
   conn.query(`SELECT * FROM MAJOR`, (err,result) => {
       if(err) throw err;   
       console.log(result);                 
       res.render('../views/major/major-data-view',{                
           listMajor: result.slice(begin, end),
           page : currentPage,
           item : itemPerPage                
       });
   });  
};

module.exports.getStudentModify = (req,res) => {
    res.render('../views/student/student-modify-view')
}