const bankAccount = require("../lib/bankAccount");

describe("bankAccount", () => {
  const account = new bankAccount();

  it("it should display the column names of the bank statement", () => {
    expect(account.printStatement()).toContain(
      "date || credit || debit || balance"
    );
  });

  it("it should display the column names and their values in the bank statement", () => {
    account.transactionDate(0);
    account.addDeposit(0);
    account.addWithdrawal(0);
    account.calculateBalance();
    expect(account.printStatement()).toContain(
      "date || credit || debit || balance\n0 || 0 || 0 || 0"
    );
  });
});
