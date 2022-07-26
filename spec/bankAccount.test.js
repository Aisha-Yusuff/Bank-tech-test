const bankAccount = require("../lib/bankAccount");

describe("bankAccount", () => {
  it("should display the column names of the bank statement", () => {
    const account = new bankAccount();
    expect(account.printStatement()).toContain(
      "date || credit || debit || balance"
    );
  });

  it("should display the column names and the date value in the bank statement", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023"
    );
  });

  it("should display the column names and the credit value in the bank statement", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    account.addDeposit(100);
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 100"
    );
  });

  it("should display the column names and the debit value in the bank statement", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    account.addDeposit(100);
    account.addWithdrawal(50);
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 100 || 50"
    );
  });

  xit("displays the balance as a difference between the credit and debit", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    account.addDeposit(1000);
    account.addWithdrawal(500);
    account.calculateBalance();
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 1000 || 500 || 500"
    );
  });

  xit("displays a bank statement even if a deposit was not made in the transaction", () => {
    const account = new bankAccount();
    account.transactionDate("14/01/2023");
    account.addDeposit(500);
    account.calculateBalance();
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance\n14/01/2023 || 500 ||  || 500"
    );
  });
});
