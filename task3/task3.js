function processWithdrawal() {
  let balance = 5000; // initial balance
  let withdraw = parseInt(document.getElementById("withdraw").value);

  if (withdraw <= balance && withdraw % 100 === 0) {
    balance -= withdraw;
    document.getElementById("result").innerText =
      "Transaction Successful\nRemaining Balance : " + balance;
  } else {
    document.getElementById("result").innerText = "Transaction Failed";
  }
}
