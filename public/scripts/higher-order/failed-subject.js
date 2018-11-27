document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let failedSubjectDiv = document.querySelector('#failed-subject')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })
        
        failedSubjectDiv.style.display = "block";
    }

}, false)