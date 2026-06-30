function checkGrade() {
  let marks = parseInt(document.getElementById("marks").value);
  let grade;

  if (marks >= 90 && marks <= 100) {
    grade = "A+";
  } else if (marks >= 80 && marks <= 89) {
    grade = "A";
  } else if (marks >= 70 && marks <= 79) {
    grade = "B";
  } else if (marks >= 60 && marks <= 69) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  document.getElementById("result").innerText = "Grade " + grade;
}
