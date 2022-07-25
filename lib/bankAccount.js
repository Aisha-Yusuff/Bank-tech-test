class bankAccount {
  printStatement() {
    const columnNames = ["date", "credit", "debit", "balance"];
    const header = columnNames.join(" || ");
    return header;
  }
}

module.exports = bankAccount;
