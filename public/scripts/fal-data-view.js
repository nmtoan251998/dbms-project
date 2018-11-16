document.addEventListener('DOMContentLoaded',()=>{
    
    const ListFalRecords = document.querySelectorAll('.id-fal');
    for( let x of ListFalRecords){
        x.addEventListener('click',function(){
            let id = this.getAttribute('data-id');
            
        })
    }
},false);