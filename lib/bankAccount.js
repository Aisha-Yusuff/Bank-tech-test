class bankAccount {
  constructor() {
    this.transaction = [];
  }
  transactionDate(date) {
    this.transaction.push(date);
  }
  addDeposit(amount) {
    this.transaction.push(amount);
  }
  addWithdrawal(amount) {
    this.transaction.push(amount);
  }
  calculateBalance() {
    const balance = this.transaction[1] - this.transaction[2];
    this.transaction.push(balance);
  }
  printStatement() {
    const columnNames = ["date", "credit", "debit", "balance"];
    const header = columnNames.join(" || ");
    const row = this.transaction.join(" || ");
    const table = `${header}\n${row}`;
    console.log(table);
    return table;
  }
}

module.exports = bankAccount;
