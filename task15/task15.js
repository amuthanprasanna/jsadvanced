function showAttendance() {
  let employees = {
    Rahul: "Present",
    Arun: "Absent",
    Kamal: "Present",
    Priya: "Present",
    Divya: "Absent"
  };

  let presentEmployees = [];
  let absentEmployees = [];
  
  for (let name in employees) {
    if (employees[name] === "Present") {
      presentEmployees.push(name);
    } else {
      absentEmployees.push(name);
    }
  }

  let output = "Present Employees: " + presentEmployees.join(", ") +
               "\nAbsent Employees: " + absentEmployees.join(", ") +
               "\nTotal Present: " + presentEmployees.length +
               "\nTotal Absent: " + absentEmployees.length;

  document.getElementById("result").innerText = output;
}