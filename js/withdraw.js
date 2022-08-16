document.getElementById("btn-withdraw").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  const withdrawTotalElement = document.getElementById("total-withdraw");
  const previousTotalWithdrawString = withdrawTotalElement.innerText;
  const previousTotalWithdraw = parseFloat(previousTotalWithdrawString);

  const currentTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;

  withdrawTotalElement.innerText = currentTotalWithdraw;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousTotalBalanceString = balanceTotalElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);

  const newTotalBalance = previousTotalBalance - newWithdrawAmount;
  balanceTotalElement.innerText = newTotalBalance;

  withdrawField.value = "";
});
