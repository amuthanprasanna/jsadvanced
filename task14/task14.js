function generateBill() {
  // Prices
  let burger = 150;
  let pizza = 300;
  let juice = 80;

  // Subtotal
  let subtotal = burger + pizza + juice;

  // GST 18%
  let gst = (subtotal * 18) / 100;

  // Grand Total
  let grandTotal = subtotal + gst;

  let output = "Subtotal: " + subtotal +
               "\nGST (18%): " + gst +
               "\nGrand Total: " + grandTotal;

  document.getElementById("result").innerText = output;
}