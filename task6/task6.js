function generateReport() {
  let report = "";

  for (let day = 1; day <= 30; day++) {
    report += "Day " + day + " Present\n";
  }

  document.getElementById("result").innerText = report;
}
