showAllShips();


var data;

function showAllShips() {
    
    data = JSON.parse(sessionStorage.getItem('ships'));
    //get id of 'ul' element
    var listView = document.getElementById('list');
    
//    goes throught array with objects and displays it
    for (var i = 0; i < data.length; i++) {
        var listItem = document.createElement('li');
        listItem.setAttribute('id', i);

        //create list of properties in list of spaeships
        var itemPropList = document.createElement('ul');
        itemPropList.setAttribute('class', 'spaceships-list__item-prop');
        
        
        for (var j = 1; j < 5; j++) {
            var itemProp = document.createElement('li');
            var propKey = document.createElement('span');
            var propValue = document.createElement('p');
            propKey.appendChild(document.createTextNode(Object.keys(data[i])[j] + ': '));
            propValue.appendChild(document.createTextNode(Object.values(data[i])[j]));
            itemProp.setAttribute('class', 'single-prop');
            itemProp.appendChild(propKey);
            itemProp.appendChild(propValue);
            itemPropList.appendChild(itemProp);
        }

        
        
        
            
        var img = document.createElement('img');
        img.setAttribute('class', 'single-item__avatar');
        img.setAttribute('src', data[i].image);
        
        var idView = listItem.getAttribute('id');
        
        listItem.appendChild(img);
        
   
        listItem.setAttribute('class', 'card');
        //create 'book' btn
        createBtn('Book', 'class', 'btn--book', listItem);


        
        listItem.appendChild(itemPropList);
       // listItem.appendChild(bookBtn);
        listItem.setAttribute('id',data[i].id);

        listView.appendChild(listItem);
    }
    
     listView.addEventListener("click",function(e) {
            var clickedID = getIndex(event.target);
            sessionStorage.setItem('selectedShip',JSON.stringify(getItemAtById(clickedID)));
            window.location.href = "single_spaceship.html";
    });
    


}

function getItemAtById(id){
    for(var i = 0; i < data.length;i++){
        if(data[i].id == id){
            return data[i];
        }
    }
}

function createBtn(text, attr, attrName, context) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode(text));
    btn.setAttribute(attr, attrName);
    context.appendChild(btn);
}

function getIndex(view){
    if(view.nodeName != "LI" || view.parentElement != document.getElementById('list')){
        //find parent
       return getIndex(view.parentNode);
    }else{
        //returns LI      id
        var ul = view.parentNode;
        var nodes = ul.childNodes;
        for (var i=0; i<nodes.length; i++) {
            var node = nodes[i]
            if (node.tagName && node.tagName.toLowerCase() == 'li' && node == view) {
                return node.getAttribute('id');
            }
        }
    }
}