// The add to cart function and cart page system

// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// saves the cart from the prodct you added
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// whenever you press add to cart button it will add the item to the cart
function addToCart(name, price, image) {
  cart.push({ name, price, image });
  saveCart();
  updateCartCount();
  alert("Item added to cart!");
}

// the bubble icon
function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (countElement) {
    countElement.textContent = cart.length;
  }
}

document.addEventListener("DOMContentLoaded", updateCartCount);

// the actual cart page display once the user adds the item to the cart

// Load and display cart items
function displayCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cart-items");
  const totalElement = document.getElementById("cart-total");

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalElement.textContent = "";
    return;
  }

  let html = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    // This sets the style of the cart page and how it orientates through the items that are being added
    // or linking perhaps

    html += `
            <div class="cart-item">
                <img src="${item.image}" class="cart-img">
                <div>
                    <h4>${item.name}</h4>
                    <p>$${item.price}</p>
                    <button class="remove-item-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
  });

  container.innerHTML = html;
  totalElement.textContent = "Total: $" + total;
}

// Remove item next to the item
function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
  updateCartCount();
}

// Clear cart
function clearCart() {
  localStorage.removeItem("cart");
  displayCart();
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.getElementById("cart-items")) {
    displayCart();
  }
});
