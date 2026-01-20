//Bank Transaction Analyzer

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

/* Tasks:
    1. filter() all credit transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000 */

const t=transactions.filter(ele=>ele.type==="credit")
console.log("Credit Transactions:", t);

const ta=transactions.map(ele=>ele.amount);
console.log("Transaction Amounts:", ta);

const finalbalance=transactions.reduce((acc,trans)=>acc+trans.amount,0);
console.log("Final Account Balance:", finalbalance);

const f=transactions.find(ele=>ele.type==="debit")
console.log("First Debit Transaction:", f);

const idx=transactions.findIndex(ele=>ele.amount===10000)
console.log("Index of Transaction with amount 10000:", idx);
