document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let avgPointDiv = document.querySelector('#avg-point')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })
        
        avgPointDiv.style.display = "block";
    }

}, false)