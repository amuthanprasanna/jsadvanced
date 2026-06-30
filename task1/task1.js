function checkEligibility() {

  let age = parseInt(document.getElementById("age").value);
  let idAvailable = document.getElementById("idAvailable").value.toLowerCase() === "true";
  let attendance = parseInt(document.getElementById("attendance").value);

  if (age >= 18 && idAvailable && attendance >= 75) {
    document.getElementById("result").innerText = "Access Granted";
  } else {
    document.getElementById("result").innerText = "Access Denied";
  }
}