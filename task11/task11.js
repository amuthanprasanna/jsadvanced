function generateID() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let department = document.getElementById("department").value;

  let output = `Welcome ${name}
Your Employee ID is EMP${id}
Department : ${department}`;

  document.getElementById("result").innerText = output;
}