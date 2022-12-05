"use strict";
var addItemId = 1;
function wishList(item){
addItemId += 1; 

// sending item to the wishlist
// making sure item on the wish list shows the image and the title



    var selectedItem = document.createElement ('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id',addItemId);
    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc); 
    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;
    var label = document.createElement('div');
    var select = document.createElement('span');
    var cartItems = document.getElementById('title');
    cartItems.append(selectedItem); 
    cartItems.append(selectedItem); 
    selectedItem.append(img);
    selectedItem.append(title);         
        }
      
do {
	 
} while (condition);
// Sending alert to customer when they click the button. 
    function sendAlert() {
        alert("Your wish list has been emailed")
    }



// function t0 only add item one time in the wish list
// I don't know what went wrong in this function but i tried to fix it for a long time and I was not able to do so.
    
function addItem(title,button){
var cartItems = document.getElementById('title');
for (var i = 0; i < cartItems.length; i++) {
    if (cartItems[i].innerText ==  title);{
        alert('This item is already added to the cart');




    }}}


    