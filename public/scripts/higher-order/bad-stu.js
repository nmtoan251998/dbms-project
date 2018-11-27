document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let badStuDiv = document.querySelector('#bad-stu')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })
        
        badStuDiv.style.display = "block";
    }

}, false)