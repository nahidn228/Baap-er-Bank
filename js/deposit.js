document.getElementById("btn-diposit").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-field");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);

  depositField.value = "";

  if (isNaN(newDepositAmount)) {
    alert("Please provide a valide amount");
    return;
  }

  //console.log(typeof newDepositAmount);

  const depositTotalEliment = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalEliment.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);

  const currentTotalDeposit = previousDepositTotal + newDepositAmount;
  depositTotalEliment.innerText = currentTotalDeposit;

  const balanceTotalElement = document.getElementById("balance-total");
  const previousTotalBalanceString = balanceTotalElement.innerText;
  const previousTotalBalance = parseFloat(previousTotalBalanceString);

  const currentTotalBalance = previousTotalBalance + newDepositAmount;
  balanceTotalElement.innerText = currentTotalBalance;
});
