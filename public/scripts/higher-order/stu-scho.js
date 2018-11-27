document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let stuSchoDiv = document.querySelector('#stu-scho')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })        
        stuSchoDiv.style.display = "block";
    }

}, false)