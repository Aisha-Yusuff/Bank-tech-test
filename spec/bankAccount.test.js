const bankAccount = require("../lib/bankAccount");

describe("bankAccount", () => {
  it("should display the column names of the bank statement", () => {
    const account = new bankAccount();
    expect(account.printStatement()).toContain(
      "date || credit || debit || balance"
    );
  });

  it("should display the column names and their values in the bank statement", () => {
    const account = new bankAccount();
    account.transactionDate(0);
    account.addDeposit(0);
    account.addWithdrawal(0);
    account.calculateBalance();
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n0 || 0 || 0 || 0"
    );
  });

  it("should display the column names and the date value in the bank statement", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    account.addDeposit(0);
    account.addWithdrawal(0);
    account.calculateBalance();
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 0 || 0 || 0"
    );
  });

  it("displays the balance as a difference between the credit and debit", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    account.addDeposit(1000);
    account.addWithdrawal(500);
    account.calculateBalance();
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 1000 || 500 || 500"
    );
  });
});
