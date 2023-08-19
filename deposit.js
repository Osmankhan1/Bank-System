document.getElementById('btn-deposit').addEventListener('click' , function(){
   const depositField = document.getElementById('deposit-box');
   const depositAmountstring = depositField.value;
   const depositAmount = parseFloat(depositAmountstring);
//    deposit total
 const depositInTotal = document.getElementById('deposit-total');
 const depositTotalstring = depositInTotal.innerText;
 const depositTotal = parseFloat(depositTotalstring);
console.log(typeof depositTotal);
 currentAmount = depositAmount + depositTotal;
 depositInTotal.innerText = currentAmount;

//  balance part
const balanceTotal =document.getElementById('balance-total');
const preBalanceTotalString =balanceTotal.innerText;
const preBalanceTotal = parseFloat(preBalanceTotalString);

// calculate total balanceTotal
const currentBalance = preBalanceTotal + depositAmount;
balanceTotal.innerText = currentBalance;

depositField.value = '';
})