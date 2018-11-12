document.addEventListener("DOMContentLoaded", function(){

    /* Instead of getting the table data size, we will get it from the database */    
    let pageIndex = document.querySelectorAll('.page-index')    
            
    // let localData = []

    /* Additionally initialize the currentPage = 1, we will add the items id */
    // let currentPage = 1   
    
    // let totalShowedItem = document.querySelector('#total-item-page');

    
    /* Simulation 
    
    begin = (n-1)*x
    end = n*x

    with:
    n: total page
    x: total item per page

    */
    
    // let totalItemPerPage = parseInt(totalShowedItem.value)       
    // let begin = (currentPage-1) * totalItemPerPage
    // let end = currentPage*totalItemPerPage 
    
    // // Change the item per page by the selected value
    // totalShowedItem.addEventListener("change", function(){        
    //     totalItemPerPage = parseInt(totalShowedItem.value)        

    //     // Re-load the table  
    //     reloadTable();
    // })    
    
    /* Push data into an array */
    // htmlTableData.forEach(item => {        
    //     localData.push(item)
    //     hiddenData()
    // })     
                            
    // let tableDataLen = htmlTableData.length

    
    // render(begin, end, localData)   

        
    let pageIndex = document.querySelectorAll('.page-index')    
    let pageIndexLen = pageIndex.length    
    
    let activatePage = 1;

    // Render the first page
    // activatingPage()
        
    pageIndex.forEach((eachIndex, index) => {                       
        eachIndex.addEventListener("click", function(){                     

            activatePage = index + 1;
            currentPage = parseInt(this.value);
                        
            pageIndex.forEach(each => {                
                each.classList.remove('activating')
            })
            
            this.classList.add('activating')
        })                           
    })    
    
    function activatingPage(){          
        pageIndex.forEach(each => {            
            each.classList.remove('activating')
        })
        if(activatePage > pageIndexLen)
            activatePage = 1
        
        pageIndex[activatePage-1].classList.add('activating');
    }
    
    // let previous = document.querySelector('#previous');
    // let next = document.querySelector('#next');    
    
    // previous.addEventListener("click", function(){              
    //     // If the current page === 1, do nothing
    //     if(currentPage === 1)
    //         return               

        
    //     currentPage--;        
    //     activatePage--;
        
    //     // checkPagesIndex();
    //     activatingPage();  
                       
    //     // Re-load the table  
    //     // reloadTable();
    // })

    // next.addEventListener("click", function(){     
    //     // If the current page === length, do nothing
    //     if(currentPage >= tableDataLen/totalItemPerPage)
    //         return                
        
    //     currentPage++;        
    //     activatePage++;                 
        
    //     // checkPagesIndex();
    //     activatingPage(); 
                
    //     // Re-load the table  
    //     // reloadTable();
    // })
    
    // function checkPagesIndex(){
    //     if(currentPage === 1){
    //         return
    //     }
    //     else if(activatePage === 0){            
    //         activatePage = 5;
    //         pageIndex.forEach(eachIndex => {        
    //             // Decrease the total page index 6,7,8,9,10 -> 1,2,3,4,5
    //             let increasement = parseInt(eachIndex.value) - pageIndexLen;
    //             eachIndex.value = increasement;                
    //         })
    //     }
    //     else if(currentPage > parseInt(pageIndex[pageIndexLen-1].value) ){
    //         pageIndex.forEach(eachIndex => {     
    //             // Increase the total page index 1,2,3,4,5 -> 6,7,8,9,10               
    //             let increasement = parseInt(eachIndex.value) + pageIndexLen;
    //             eachIndex.value = increasement;                
    //         })
    //     }        
    // }
    
    
    
    /* We wont have hiddenData() in realistic, just render what we need instead */
    // function hiddenData(){
    //     tableData.forEach(item => {
    //         item.classList.add('not-visible')            
    //     })  
    // }
   
    /* Render data */
    // function render(beginning, ending, arrayData){
        
    //     // Give the data rendered
    //     let items = arrayData.slice(beginning,ending)

    //     // Render them by remove the not-visible class
    //     items.forEach(visibleData => {            
    //         /* We will render data by another solution, not in this way */
    //         visibleData.classList.remove('not-visible')
    //     })
    // }

    /* Reload the table */ 
    // function reloadTable(){
    //     // Re-render the table        
    //     begin = (currentPage-1) * totalItemPerPage;
    //     end = currentPage*totalItemPerPage;        
    //     hiddenData()
    //     render(begin, end, localData)      
    // }

}, false)