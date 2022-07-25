const bankAccount = require("../lib/bankAccount");

describe("bankAccount", () => {
  it("it should display the column names of the bank statement", () => {
    const Account = new bankAccount();
    expect(Account.printStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
