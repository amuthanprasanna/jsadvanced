function showCartDetails() {
  let cart = ["Milk", "Bread", "Egg", "Rice", "Oil"];

  let firstItem = cart[0];
  let lastItem = cart[cart.length - 1];
  let totalItems = cart.length;

  let output = "First Item: " + firstItem +
               "\nLast Item: " + lastItem +
               "\nTotal Items: " + totalItems;

  document.getElementById("result").innerText = output;
}