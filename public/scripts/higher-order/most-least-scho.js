document.addEventListener("DOMContentLoaded", function(){
    let funcList = document.querySelectorAll('.function-item');
    
    let mostLeastSchoDiv = document.querySelector('#most-least-scho')
    
    initialize();

    function initialize(){
        funcList.forEach(funcItem => {
            funcItem.style.display = "none";
        })        
        mostLeastSchoDiv.style.display = "block";
    }

}, false)