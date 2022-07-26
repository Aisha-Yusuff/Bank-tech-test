class bankAccount {
  constructor() {
    this.transaction = [];
    this.index = 0;
  }
  transactionDate(date) {
    this.transaction.push(date);
  }
  addDeposit(amount) {
    this.transaction.push(amount);
    console.log(this.transaction);
  }
  addWithdrawal(amount) {
    const money = parseFloat(amount);
    this.transaction.push(money);
    // find index of amount in transaction
    const amountIndex = this.transaction.indexOf(money);
    console.log(amountIndex);
    // if index is 1 put " " in front of it
    if (amountIndex === 1) {
      const blank = [];
      this.transaction.splice(1, 0, blank);
    }
    console.log(this.transaction);
  }
  calculateBalance() {
    const length = this.transaction.length;
    console.log(length);
    if (length === 2) {
      this.transaction.push("");
    }
    const credit = this.transaction[1];
    const debit = this.transaction[2];

    if (credit > 0 && debit > 0) {
      const balance = credit - debit;
      this.transaction.push(balance);
    } else if (credit > 0 && typeof debit !== "number") {
      this.transaction.push(credit);
    }
    console.log(this.transaction);
  }
  printStatement() {
    const columnNames = ["date", "credit", "debit", "balance"];
    const header = columnNames.join(" || ");
    const row = this.transaction.join(" || ");
    console.log(row);
    const table = `${header}\n${row}`;
    console.log(table);
    return table;
  }
}

module.exports = bankAccount;
