function generateEvenNumbers() {
  let output = "";

  for (let num = 2; num <= 100; num++) {
    if (num % 2 === 0) {
      output += num + "\n";
    }
  }

  document.getElementById("result").innerText = output;
}
