document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let fullStuInfoDiv = document.querySelector('#full-stu-info')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })        
        fullStuInfoDiv.style.display = "block";
    }

}, false)