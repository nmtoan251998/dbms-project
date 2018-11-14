document.addEventListener("DOMContentLoaded", function(){
    
    let images = document.querySelectorAll('.img');

    let arrowLeft = document.querySelector('.left');
    let arrowRight = document.querySelector('.right');
    
    for(eachImg of images){
        eachImg.style.display = "none";
    }    

    arrowLeft.addEventListener('click', previousImg);
    arrowRight.addEventListener('click', nextImg);
        
    let recentIndex = 0;
    let imgSliderLen = images.length;
    
    images[recentIndex].style.display = "block";

    function nextImg(){
        if(recentIndex === imgSliderLen-1){                                                
            return
        }
        else{            
            images[recentIndex].style.display = "none";

            recentIndex++;

            images[recentIndex].style.display = "block";

            return
        }
    }    

    function previousImg(){                              
        if(recentIndex === 0){                     
            return
        }
        else{                        
            images[recentIndex].style.display = "none";
            
            recentIndex--;

            images[recentIndex].style.display = "block";

            return
        }
    }
}, false)