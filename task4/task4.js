function orderFood() {
  let choice = parseInt(document.getElementById("choice").value);
  let order;

  switch (choice) {
    case 1:
      order = "Pizza";
      break;
    case 2:
      order = "Burger";
      break;
    case 3:
      order = "Shawarma";
      break;
    case 4:
      order = "Biryani";
      break;
    case 5:
      order = "Juice";
      break;
    default:
      order = "Invalid Choice";
  }

  document.getElementById("result").innerText = 
    order === "Invalid Choice" ? order : "You Ordered " + order;
}
