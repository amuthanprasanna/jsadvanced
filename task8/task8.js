function validateMobile() {
  let mobile = document.getElementById("mobile").value;
  let isValid = false;

  if (mobile.length === 10) {
    let firstDigit = mobile.charAt(0);
    if (firstDigit === "6" || firstDigit === "7" || firstDigit === "8" || firstDigit === "9") {
      isValid = true;
    }
  }

  if (isValid) {
    document.getElementById("result").innerText = "Valid Mobile Number";
  } else {
    document.getElementById("result").innerText = "Invalid Mobile Number";
  }
}