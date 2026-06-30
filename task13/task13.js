function calculateIncrement() {
  let salary = parseFloat(document.getElementById("salary").value);
  let incrementPercent = parseFloat(document.getElementById("increment").value);

  let incrementAmount = (salary * incrementPercent) / 100;
  let newSalary = salary + incrementAmount;

  let output = "Old Salary: " + salary +
               "\nIncrement Amount: " + incrementAmount +
               "\nNew Salary: " + newSalary;

  document.getElementById("result").innerText = output;
}