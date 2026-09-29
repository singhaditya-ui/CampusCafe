// ---------- Order list (arrays) ----------

// These two arrays store the item names and their prices
var itemNames = [];
var itemPrices = [];

// This function runs when an "Add" button is clicked
function addItem(name, price) {
  // Add the item to both arrays
  itemNames.push(name);
  itemPrices.push(price);

  // Show a small message
  document.getElementById("menuMsg").innerHTML = name + " added to your order.";

  // Update the order list
  showCart();
}

// Show all items and the total
function showCart() {
  var list = document.getElementById("cartList");
  var total = 0;

  // Clear the old list
  list.innerHTML = "";

  // Go through all items using a loop
  for (var i = 0; i < itemNames.length; i++) {
    list.innerHTML += "<li>" + itemNames[i] + " - Rs. " + itemPrices[i] + "</li>";
    total = total + itemPrices[i];
  }

  // If there are no items, show a message
  if (itemNames.length === 0) {
    list.innerHTML = "<li>No items added yet.</li>";
  }

  // Show the total
  document.getElementById("total").innerHTML = total;
}

// Remove all items from the order
function clearCart() {
  itemNames = [];
  itemPrices = [];
  showCart();
}


// ---------- Place order ----------

function placeOrder() {
  var name = document.getElementById("name").value;
  var time = document.getElementById("time").value;
  var msg = document.getElementById("msg");

  // Show the message box
  msg.classList.remove("hidden");

  // Check the order
  if (itemNames.length === 0) {
    msg.innerHTML = "Please add some items first.";
  } else if (name === "") {
    msg.innerHTML = "Please enter your name.";
  } else {
    msg.innerHTML = "Thank you " + name + "! Your order is placed. Pickup: " + time + ".";
  }
}

// Show the empty order list when the page opens
showCart();