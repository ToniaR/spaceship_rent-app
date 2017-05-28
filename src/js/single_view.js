showShip();

function showShip() {  
  var space = JSON.parse(sessionStorage.getItem('selectedShip'));
  var nameBlock = document.getElementById('spaceship-name');
  var properties = document.getElementById('properties');
    

    var gallery = document.getElementById('gallery'); 

          /*create image*/
      var img = document.createElement('img');
      img.setAttribute('src', space.image);
      img.setAttribute('class', 'gallery__image');
      
      var card = document.getElementById('single-spaceship'); 
        gallery.appendChild(img);   
      


    
      var shipName = document.getElementById('spaceship-name');
      shipName.appendChild(document.createTextNode(space.name));
    
      /*create header*/
    /*create li element for spaceship single view*/
    
    
    for (var i = 2; i< spaseships.length; i++) {
      var item = document.createElement('li');  
      item.setAttribute('class', 'properties-list__property');
      var itemName = document.createElement('span');
      itemName.setAttribute('class', 'properties-list__property-name');
      var itemValue = document.createElement('p');
      itemValue.setAttribute('class', 'properties-list__property-value');
      itemName.appendChild(document.createTextNode(Object.keys(space)[i]));
      itemValue.appendChild(document.createTextNode(Object.values(space)[i]));
      
      item.appendChild(itemName);
      item.appendChild(itemValue);

      properties.appendChild(item);

    }
    
    var priceItem = document.createElement('span');
    priceItem.setAttribute('class', 'price');
   // priceItem.appendChild(document.createTextNode(space.price + ' PLN/1 h'));
    card.appendChild(priceItem);

    
    //ship rating 
    var n = space.rating;
    var starRating = document.getElementById('star-rating' +'-'+ n);
    
    starRating.checked = 'true';
      
      
        //create 'add to card' btn
        createBtn('Add to card', 'class', 'btn--add', card); 
    
        //create 'book' btn
        createBtn('Book', 'class', 'btn--book', card);

         
    

}


function createBtn(text, attr, attrName, context) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode(text));
    btn.setAttribute(attr, attrName);
    context.appendChild(btn);
}