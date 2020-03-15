/* global Cart */
'use strict';

getItem2();

function cartRender(){
    var tableEl = document.getElementById('cart');
    cart.textContent = "";

    for (var i=0 ; i < itemCart.length ; i++){
        var trEl = document.createElement('tr');
        tableEl.appendChild(trEl);
        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        var buttonEl = document.createElement('button');
        tdEl.appendChild(buttonEl);
        buttonEl.setAttribute('class', 'remove-btn'); 
        buttonEl.setAttribute('id', itemCart[i].name);
        var pEl=document.createElement('p');
        buttonEl.appendChild(pEl);
        pEl.setAttribute("id",itemCart[i].name);
        pEl.setAttribute('class', 'remove-btn');
        pEl.textContent= "Remove from the cart"  
        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent =`${itemQuantity[i]}`;
        var tdEl = document.createElement('td');
        trEl.appendChild(tdEl);
        var imgEl = document.createElement('img');
        tdEl.appendChild(imgEl);
        imgEl.setAttribute('src', itemCart[i].urlImage );
        imgEl.setAttribute('alt', itemCart[i].name );
}
}
cartRender();

  tableEl.addEventListener('click', deleteBtn);

  function deleteBtn(e){
    e.preventDefault();
    for( var i=0 ; i<itemCart.length ; i++ ){
        if (e.target.id == itemCart[i].name){
            if (itemQuantity[i] === 0){
                itemQuantity.splice(i,1);
                itemCart.splice(i,1);
                cartRender();
                }
            if (itemQuantity[i] > 0){
                itemQuantity[i] = itemQuantity[i] -1;
                if (itemQuantity[i] === 0){
                    itemQuantity.splice(i,1);
                    itemCart.splice(i,1);
                    cartRender();
                    }
                setItem2();
                cartRender();
            }
    }
      
  }
}
