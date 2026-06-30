function calculateDiscount() {
  let purchase = parseFloat(document.getElementById("purchase").value);
  let premiumUser = document.getElementById("premium").value.toLowerCase() === "true";
  let discountRate;

  if (purchase > 5000 && premiumUser) {
    discountRate = 0.20; 
  } else {
    discountRate = 0.10; 
  }

  let discount = purchase * discountRate;
  let finalPrice = purchase - discount;

  document.getElementById("result").innerText =
    "Original Price: " + purchase +
    "\nDiscount: " + discount +
    "\nFinal Price: " + finalPrice;
}
