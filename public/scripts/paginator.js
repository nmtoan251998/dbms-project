document.addEventListener("DOMContentLoaded", function(){

    /* Instead of getting the table data size, we will get it from the database */
    let htmlTableData = document.querySelectorAll('.tb-data')
            
    let localData = []

    /* Additionally initialize the currentPage = 1, we will add the items id */
    let currentPage = 1   
    
    let totalShowedItem = document.querySelector('#total-item-page');

    
    /* Simulation 
    
    begin = (n-1)*x
    end = n*x

    with:
    n: total page
    x: total item per page

    */
    
    let totalItemPerPage = parseInt(totalShowedItem.value)       
    let begin = (currentPage-1) * totalItemPerPage
    let end = currentPage*totalItemPerPage 
    
    // Change the item per page by the selected value
    totalShowedItem.addEventListener("change", function(){        
        totalItemPerPage = parseInt(totalShowedItem.value)        

        // Re-load the table  
        reloadTable();
    })    
    
    /* Push data into an array */
    htmlTableData.forEach(item => {        
        localData.push(item)
        hiddenData()
    })     
    
               
    // Get the pages indexes 
    let pageIndex = document.querySelectorAll('.page-index')

    // Add activating class to the current index page
    let activatePage = 1;

    // Get the length of some elements
    let pageIndexLen = pageIndex.length
    let tableDataLen = htmlTableData.length

    // Render the first page
    activatingPage()
    render(begin, end, localData)   
    
    
    pageIndex.forEach((eachIndex, index) => {                  
        eachIndex.addEventListener("click", function(){                     
            
            // Get the current page index
            activatePage = index+1;
            
            currentPage = parseInt(this.value)  
            
            // Remove all the activating class before adding class to the recent onClicked()
            pageIndex.forEach(each => {
                // Remove the active class 
                each.classList.remove('activating')
            })
            // Add an active class to the recent page index 
            this.classList.add('activating')            

            // Re-load the table           
            reloadTable();
        })                           
    })       

    /* Get the moveable buttons */
    let previous = document.querySelector('#previous');
    let next = document.querySelector('#next');    
    
    previous.addEventListener("click", function(){              
        // If the current page === 1, do nothing
        if(currentPage === 1)
            return               

        // Decrease the page index by 1 unit
        currentPage--;
        // Get the current page index
        activatePage--;
        
        checkPagesIndex();
        activatingPage();  
                       
        // Re-load the table  
        reloadTable();
    })

    next.addEventListener("click", function(){     
        // If the current page === length, do nothing
        if(currentPage >= tableDataLen/totalItemPerPage)
            return                

        // Increase the page index by 1 unit
        currentPage++;
        // Get the current page index
        activatePage++;                 
        
        checkPagesIndex();
        activatingPage(); 
                
        // Re-load the table  
        reloadTable();
    })

    /* Check the recent page number to do something */
    function checkPagesIndex(){
        if(currentPage === 1){
            return
        }
        else if(activatePage === 0){            
            activatePage = 5;
            pageIndex.forEach(eachIndex => {        
                // Decrease the total page index 6,7,8,9,10 -> 1,2,3,4,5
                let increasement = parseInt(eachIndex.value) - pageIndexLen;
                eachIndex.value = increasement;                
            })
        }
        else if(currentPage > parseInt(pageIndex[pageIndexLen-1].value) ){
            pageIndex.forEach(eachIndex => {     
                // Increase the total page index 1,2,3,4,5 -> 6,7,8,9,10               
                let increasement = parseInt(eachIndex.value) + pageIndexLen;
                eachIndex.value = increasement;                
            })
        }        
    }

    /* Display which page is activated */
    function activatingPage(){
        // Remove all the activating class before adding class to the recent onClicked()
        pageIndex.forEach(each => {
            // Remove the active class 
            each.classList.remove('activating')
        })
        if(activatePage > pageIndexLen)
            activatePage = 1
        // Add activating class to the first element
        pageIndex[activatePage-1].classList.add('activating');
    }
    
    /* We wont have hiddenData() in realistic, just render what we need instead */
    function hiddenData(){
        tableData.forEach(item => {
            item.classList.add('not-visible')            
        })  
    }
   
    /* Render data */
    function render(beginning, ending, arrayData){
        
        // Give the data rendered
        let items = arrayData.slice(beginning,ending)

        // Render them by remove the not-visible class
        items.forEach(visibleData => {            
            /* We will render data by another solution, not in this way */
            visibleData.classList.remove('not-visible')
        })
    }

    /* Reload the table */ 
    function reloadTable(){
        // Re-render the table        
        begin = (currentPage-1) * totalItemPerPage;
        end = currentPage*totalItemPerPage;        
        hiddenData()
        render(begin, end, localData)      
    }

}, false)