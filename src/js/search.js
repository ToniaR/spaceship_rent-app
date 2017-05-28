function searchBtn() {
    //get values from inputs
    var pickUp = document.getElementById('pick-up-place').value;
    var dropOff = document.getElementById('drop-off-place').value;
    
    var startDate = document.getElementById('start-date').value;
    var endDate = document.getElementById('end-date').value;
     var arr = [];
    
    obj = spaseships.filter(function(obj){
                return( (obj.locations.includes(pickUp)  && obj.locations.includes(dropOff)) && (!( obj.date.includes(startDate) )  && !(obj.date.includes(endDate))));
            });
         
        
//    obj = spaseships.filter(function(obj){
//                return( obj.date.includes(startDate) && obj.date.includes(endDate));
//            });
//    
    
    for (var i = 0; i < obj.length; i++) {
        console.log(obj[i].id); 
    }
    
    sessionStorage.setItem('ships', JSON.stringify(obj));
    window.location.href = 'search_result.html';  
    
}

