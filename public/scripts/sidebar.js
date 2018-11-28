document.addEventListener("DOMContentLoaded", function(){
    let closeBtn = document.querySelector(".close-btn");
    let menuBtn = document.querySelector(".menu-btn");
    let sideBar = document.querySelector(".sidebar");
    let options = document.querySelector(".options");

    let test  = window.pageYOffset;
    // console.log({test})

    window.addEventListener("scroll", function(){
        if(this.pageYOffset >= 2650){
            options.style.fontSize = 0;
        }else{
            options.style.fontSize = "35px";
        }
    })        

    closeBtn.addEventListener("click", function(){              
        setTimeout(() => options.style.fontSize = 35+"px", 250)          
        sideBar.style.width = "0px";              
    })

    menuBtn.addEventListener("click", function(){
        options.style.fontSize = 0;
        sideBar.style.width = "12vw";      
    })

    // Clicked event of window
    window.addEventListener("click", e => {
        if(options.contains(e.target)){
            return           
        }else{
            setTimeout(() => options.style.fontSize = 35+"px", 250)          
            sideBar.style.width = "0px";            
        }         
    })

}, false)