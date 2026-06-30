function showEmployee() {
  let employee = {
    name: "John Doe",
    salary: 50000,
    department: "IT",
    experience: "5 years"
  };

  let output = "Employee Name: " + employee.name +
               "\nDepartment: " + employee.department +
               "\nExperience: " + employee.experience;

  document.getElementById("result").innerText = output;
}
