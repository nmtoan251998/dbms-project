document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let totalStuDiv = document.querySelector('#total-stu')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })        
        totalStuDiv.style.display = "block";
    }

}, false)