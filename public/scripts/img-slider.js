document.addEventListener("DOMContentLoaded", function(){
    let imgSlider = document.querySelector('.img-slider');
    let images = document.querySelectorAll('.img');

    let arrowLeft = document.querySelector('.left');
    let arrowRight = document.querySelector('.right');


    //hidden all images
    for(let x of images){
        x.style.display = "none";
    }    

    arrowLeft.addEventListener('click', previousImg);
    arrowRight.addEventListener('click', nextImg);

    
    //set the index for recent image
    let recentIndex = 0;

    //display the first image
    images[0].style.display = "block";

    function nextImg(){

        if(recentIndex === images.length-1){                        
            //if the recent index  === length, hidden the earlier image
            images[recentIndex].style.display = "none";

            //set it to the first index
            recentIndex = 0;

            //display the first index
            images[recentIndex].style.display = "block";
            return
        }
        else{            
            //hide the recent image
            images[recentIndex].style.display = "none";

            //increase the index by one
            recentIndex++;

            //display the image at increased index
            images[recentIndex].style.display = "block";
            return
        }
    }    

    function previousImg(){                              
        if(recentIndex === 0){            
            //if the recent index  === length, hidden the earlier image            
            images[recentIndex].style.display = "none";

            //set it to the first index
            recentIndex = images.length-1;

            //display the first index
            images[recentIndex].style.display = "block";
            return
        }
        else{            
            //hide the recent image
            images[recentIndex].style.display = "none";

            //increase the index by one
            recentIndex--;

            //display the image at increased index
            images[recentIndex].style.display = "block";
            return
        }
    }
    

}, false)