document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  withdrawField.value = "";

  if (isNaN(newWithdrawAmount)) {
    alert("please Provide a valid Amount");
    return;
  }

  const withdrawTotalElement = document.getElementById("total-withdraw");
  const previousTotalWithdrawString = withdrawTotalElement.innerText;
  const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

  const balanceTotalElement = document.getElementById("balance-total");
  const previousTotalBalanceString = balanceTotalElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);

  if (newWithdrawAmount > previousTotalBalance) {
    alert("Baap er Bank eto taka Nai");
    return;
  }

  const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
  withdrawTotalElement.innerText = currentTotalWithdraw;

  const newTotalBalance = previousTotalBalance - newWithdrawAmount;
  balanceTotalElement.innerText = newTotalBalance;
});
