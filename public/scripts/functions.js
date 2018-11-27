document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    let funcBtn = document.querySelectorAll('.btn');
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })
        funcList[0].style.display = "block";
    }
    

    funcBtn.forEach( (btn,index) => {
        btn.addEventListener("click", () => {
            
            funcList.forEach(funcItem => {
                funcItem.style.display = "none";
            })
            funcList[index].style.display = "block";
            
        })
    })
}, false)