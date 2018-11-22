document.addEventListener("DOMContentLoaded", function(){
    let addBtn = document.querySelector(".add-button");
    let cancelBtn = document.querySelector(".cancel-button");    
    let formCreate = document.querySelector(".form-create");
    
    formCreate.classList.add("invisible");

    addBtn.addEventListener("click", () => { 
        if(formCreate.classList.contains("invisible"))               
            formCreate.classList.remove("invisible")
    })

    cancelBtn.addEventListener("click", () => {        
        console.log("clicked")
        formCreate.classList.add("invisible");
    })    
}, false)