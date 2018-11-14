document.addEventListener('DOMContentLoaded',()=>{
    
    const ListFalRecords = document.querySelectorAll('.id-fal');
    for( let x of ListFalRecords){
        x.addEventListener('click',function(){
            let id = this.getAttribute('data-id');
            const sql = `DELETE FROM FALCULTY WHERE ID = ${id}`;
            conn.query(sql,(err,result)=>{
                if (err) throw err;
                console.log(result);
            })
        })
    }
},false);