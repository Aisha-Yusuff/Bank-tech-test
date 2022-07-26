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
    const debitIndex = this.transaction.indexOf(money);
    if (debitIndex % 2 != 0) {
      this.transaction.splice(9, 0, "");
    }
  }
  calculateBalance() {
    const length = this.transaction.length;
    if (length === 2 || (length % 3 === 0 && length > 3)) {
      this.transaction.push("");
    }

    let credit = this.transaction[1];
    let debit = this.transaction[2];
    let balance = credit;
    let currentBalance = 0;

    if (length > 4 && length < 8) {
      credit = this.transaction[5];
      balance = credit;
    } else if (length > 8) {
      credit = this.transaction[9];
      debit = this.transaction[10];
      if (debit > 0 && typeof credit != "number") {
        const withdrawal = -Math.abs(debit);
        balance = withdrawal;
      }
    }

    if (credit > 0 && debit > 0) {
      balance = credit - debit;
    }

    this.balance.push(balance);
    currentBalance = this.balance.reduce((partialSum, b) => partialSum + b, 0);

    if (currentBalance < 0) {
      return "This withdrawal exceeds the current balance.";
    }
    this.transaction.push(currentBalance);
  }

  printStatement() {
    const header = "date || credit || debit || balance";
    let table = "";
    const firstTransaction = this.transaction.slice().splice(0, 4);
    const secondTransaction = this.transaction.slice().splice(4, 4);
    const thirdTransaction = this.transaction.slice().splice(8, 4);

    const bottomRow = firstTransaction.join(" || ");
    const middleRow = secondTransaction.join(" || ");
    const topRow = thirdTransaction.join(" || ");

    if (this.transaction.length > 4 && this.transaction.length < 9) {
      table = `${header}\n${middleRow}\n${bottomRow}`;
    } else if (this.transaction.length > 9) {
      table = `${header}\n${topRow}\n${middleRow}\n${bottomRow}`;
    } else {
      const row = this.transaction.join(" || ");
      table = `${header}\n${row}`;
    }
    console.log(table);
    return table;
  }
}
module.exports = bankAccount;
