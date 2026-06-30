function registerUser() {
  let name = prompt("Enter your Name:");
  let age = prompt("Enter your Age:");
  let termsAccepted = confirm("Do you accept the Terms and Conditions?");

  if (termsAccepted) {
    alert("Registered Successfully\nName: " + name + "\nAge: " + age);
  } else {
    alert("Registration Failed - Terms not accepted");
  }
}