/* global Product, Cart */

'use strict';

function populateForm() {   
  for (var i=0 ; i < allProducts.length ; i++) {
        var optionEl = document.createElement('option');
        selectEl.appendChild(optionEl);  
        var pEl = document.createElement('p');
        optionEl.appendChild(pEl);
        pEl.textContent=`${allProducts[i].name}`; 
  } 
}
populateForm();



eventos.addEventListener('submit', submit);

  function submit(e){
    e.preventDefault();
    if (document.getElementById("quantity").value !== ''){
      itemQuantity.push(document.getElementById("quantity").value);
    }
    for (var i=0 ; i < allProducts.length ; i++){
    if (document.getElementById("items").value === allProducts[i].name){
        itemCart.push(allProducts[i]);   
    }
  }
  setItem2();
  document.getElementById("items").value='';
  document.getElementById("quantity").value='';
  }

  getItem2();
