let employees = [];

function showMenu() {
  let choice;
  do {
    choice = prompt(
      "Employee Management System\n" +
      "1. Add Employee\n" +
      "2. View All Employees\n" +
      "3. Search Employee by ID\n" +
      "4. Calculate Salary with Bonus\n" +
      "5. Check Experience Level\n" +
      "6. Delete Employee\n" +
      "7. Exit\n\n" +
      "Enter your choice:"
    );

    switch (choice) {
      case "1":
        let name = prompt("Enter Employee Name:");
        let id = prompt("Enter Employee ID:");
        let department = prompt("Enter Department:");
        let salary = parseFloat(prompt("Enter Salary:"));
        let experience = parseInt(prompt("Enter Experience (years):"));
        employees.push({ name, id, department, salary, experience });
        alert(`Employee ${name} added successfully!`);
        break;

      case "2":
        if (employees.length === 0) {
          alert("No employees found.");
        } else {
          let list = "All Employees:\n";
          employees.forEach(emp => {
            list += `Name: ${emp.name}, ID: ${emp.id}, Dept: ${emp.department}, Salary: ${emp.salary}, Exp: ${emp.experience} years\n`;
          });
          alert(list);
        }
        break;

      case "3":
        let searchId = prompt("Enter Employee ID to search:");
        let emp = employees.find(e => e.id === searchId);
        if (emp) {
          alert(`Found: ${emp.name}, Dept: ${emp.department}, Salary: ${emp.salary}`);
        } else {
          alert("Employee not found!");
        }
        break;

      case "4":
        let bonusId = prompt("Enter Employee ID for bonus calculation:");
        let bonusPercent = parseFloat(prompt("Enter Bonus Percentage:"));
        let empBonus = employees.find(e => e.id === bonusId);
        if (empBonus) {
          let bonus = (empBonus.salary * bonusPercent) / 100;
          let newSalary = empBonus.salary + bonus;
          alert(`Old Salary: ${empBonus.salary}\nBonus: ${bonus}\nNew Salary: ${newSalary}`);
        } else {
          alert("Employee not found!");
        }
        break;

      case "5":
        let expId = prompt("Enter Employee ID to check experience level:");
        let empExp = employees.find(e => e.id === expId);
        if (empExp) {
          if (empExp.experience < 3) {
            alert(`${empExp.name} is Junior`);
          } else if (empExp.experience <= 7) {
            alert(`${empExp.name} is Mid-level`);
          } else {
            alert(`${empExp.name} is Senior`);
          }
        } else {
          alert("Employee not found!");
        }
        break;

      case "6":
        let delId = prompt("Enter Employee ID to delete:");
        let beforeCount = employees.length;
        employees = employees.filter(e => e.id !== delId);
        if (employees.length < beforeCount) {
          alert(`Employee with ID ${delId} deleted.`);
        } else {
          alert("Employee not found!");
        }
        break;

      case "7":
        alert("Exiting Employee Management System...");
        break;

      default:
        alert("Invalid choice. Please try again.");
    }
  } while (choice !== "7");
}