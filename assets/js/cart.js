const shopTable = document.querySelector('.shopping-cart');

const DisplaycartEl = ()=>{
    let cartRow = document.createElement('tr');
    cartRow.classList.add('cart-row');
    let cartItems = document.getElementsByClassName('cart-items')[0];
    const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));
    if (storedCartArr) {
    
        storedCartArr.forEach(cart =>{
            console.log(storedCartArr);
        let cartRowContents = `
  
        <td class="cart-item cart-column">
            <img class="cart-item-image" src="${cart.image}" width="50" height="50">
            <span class="cart-item-title">${cart.item}</span>                  
        </td>
        <td class="cart-item cart-column">
            <span class="cart-price cart-column">${cart.price}</span>
        </td>
        <td class="cart-item cart-column">
            <input class="cart-quantity-input" type="number" value="1" style="width: 50px">
            <button class="btn btn-danger" type="button">Remove</button>
        </td>        
    `;
    cartRow.innerHTML += cartRowContents;
      })

  cartItems.append(cartRow);
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
  updateCartTotal();
    }else{
    alert('This has item already been added to the cart!');
  }
}
DisplaycartEl()
window.addEventListener('load', () => {
    const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));
  
    if (storedCartArr) {
      // Affiche les éléments du panier au chargement de la page
      updateCartTotal();
    }
  });

function removeCartItem(event) {
    let buttonClicked = event.target;
    let cartItem = buttonClicked.parentElement.parentElement;
    let itemName = cartItem.getElementsByClassName('cart-item-title')[0].innerText;
    
    // Supprimer l'élément du local storage en utilisant son nom (itemName)
    const storedCartArr = JSON.parse(localStorage.getItem('cartArr'));
    if (storedCartArr) {
      const updatedCartArr = storedCartArr.filter(cart => cart.item !== itemName);
      localStorage.setItem('cartArr', JSON.stringify(updatedCartArr));
    }
  
    // Supprimer l'élément de l'affichage du panier
    cartItem.remove();
    updateCartTotal();
  }
  function quantityChanged(event){
    let input = event.target;
    if(isNaN(input.value) || input.value <= 0 ){
        input.value = 1;
    }
    updateCartTotal();
  }
  
  function updateCartTotal(){
    let cartItemContainer = document.getElementsByClassName('cart-items')[0];
    let cartRows = cartItemContainer.getElementsByClassName('cart-row');
    let total = 0;
    for (let i = 0 ; i< cartRows.length ; i++){
        let cartRow =cartRows[i];
        let priceElement = cartRow.getElementsByClassName('cart-price')[0];
        let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        let price = parseFloat(priceElement.innerText)
        let quantity = quantityElement.value;
        total = total + (price * quantity);
         
    }
    total = Math.round(total * 100 )/100;
    document.getElementsByClassName('cart-total-price')[0].innerText = "$" + total + '.00';
  
  }
  