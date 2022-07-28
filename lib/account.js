class Account {
  constructor() {
    this.allTransactions = [];
    this.balance = 0;
    this.eachRow = "";
    this.allRows = [];
  }

  addTransaction(transaction) {
    this.allTransactions = this.allTransactions.concat(transaction);
  }

  calculateBalance() {
    this.allTransactions.map((transaction) => {
      if (transaction.type === "deposit") {
        this.balance += transaction.amount;
      } else {
        this.balance -= transaction.amount;
      }
      transaction.balance = this.balance;
    });
  }

  overdrawn() {
    if (this.balance < 0) {
      const errorMessage =
        "This withdrawal exceeds your account's current balance. All withdrawals must be below the account's balance";
      console.log(errorMessage);
      return errorMessage;
    }
  }

  createStatement() {
    this.allTransactions.map((transaction) => {
      if (transaction.type === "deposit") {
        this.eachRow = `${transaction.date} || ${transaction.amount.toFixed(
          2
        )} || || ${transaction.balance.toFixed(2)}`;
      } else {
        this.eachRow = `${transaction.date} || || ${transaction.amount.toFixed(
          2
        )} || ${transaction.balance.toFixed(2)}`;
      }
      this.allRows.push(this.eachRow);
    });
  }

  printStatement() {
    const header = "date || credit || debit || balance";
    const reverseRows = this.allRows.reverse();
    const table = header + "\n" + reverseRows.join("\n");
    console.log(table);
    return table;
  }
}

module.exports = Account;
