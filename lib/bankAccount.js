class bankAccount {
  constructor() {
    this.transaction = [];
    this.index = 0;
    this.balance = [0];
  }
  transactionDate(date) {
    this.transaction.push(date);
  }
  addDeposit(amount) {
    const money = parseFloat(amount);
    this.transaction.push(money);
  }
  addWithdrawal(amount) {
    const money = parseFloat(amount);
    this.transaction.push(money);
    // splice at 2/3 in a loop
    // make two new arrays
  }

  calculateBalance() {
    const length = this.transaction.length;
    if (length === 2 || (length % 3 === 0 && length > 3)) {
      this.transaction.push("");
    }
    console.log(this.transaction);

    const credit = this.transaction[1];
    const debit = this.transaction[2];
    console.log(debit);
    let balance = credit;
    let currentBalance = 0;

    if (length > 4) {
      balance = this.transaction[5];
    }

    if (credit > 0 && debit > 0) {
      balance = credit - debit;
    }

    console.log("A");

    console.log(this.balance);
    this.balance.push(balance);
    currentBalance = this.balance.reduce((partialSum, b) => partialSum + b, 0);
    this.transaction.push(currentBalance);
  }

  printStatement() {
    const header = "date || credit || debit || balance";
    let table = "";
    if (this.transaction.length > 4) {
      const firstTransaction = this.transaction.slice().splice(0, 4);
      const secondTransaction = this.transaction.slice(4, 8);

      const lastRow = firstTransaction.join(" || ");
      const firstRow = secondTransaction.join(" || ");

      table = `${header}\n${firstRow}\n${lastRow}`;
    } else {
      const row = this.transaction.join(" || ");
      table = `${header}\n${row}`;
    }

    console.log(table);
    return table;
  }
}

module.exports = bankAccount;
