/*
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}*/

function openNav() {
  const media = window.matchMedia('(max-width: 450px)');
  if (media.matches) {
    document.getElementById("myNav").style.width = "100%";
  } else {
    document.getElementById("myNav").style.width = "30%";
  }
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



///////////
let cart = [];

function addToCart(itemName, itemPrice, quantity) {
  const item = { name: itemName, price: itemPrice, quantity: parseInt(quantity, 10) || 1 };
  cart.push(item);
  updateCart();
}

function removeQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1); // Remove the entire item if quantity becomes 0
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById('list-cart');
  const totalElement = document.getElementById('total');
  let total = 0;

  // Clear the cart list
  cartList.innerHTML = '';

  // Update the cart list and calculate the total
  cart.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.className = 'cart-item';
    listItem.innerHTML = `<span>${item.name} (Quantity: ${item.quantity})</span><span>${(item.price * item.quantity).toFixed(2)}</span>
                                       <button class="remove-quantity-btn btn" onclick="removeQuantity(${index})">-1 qnty</button>`;
    cartList.appendChild(listItem);
    total += item.price * item.quantity;
  });

  // Update the total amount
  totalElement.textContent = total.toFixed(2);
}


// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function validateLogin() {
  var username = document.getElementById("Username").value;
  var password = document.getElementById("Password").value;

  // Check if the username and password match the expected values
  if (username === "admin" && password === "admin123") {
    alert("Login successful!");
    window.location.reload();
  } else {
    alert("Login failed. Please check your username and password.");
    window.location.reload();
  }
}