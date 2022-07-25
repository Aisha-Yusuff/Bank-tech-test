const bankAccount = require("../lib/bankAccount");

describe("bankAccount", () => {
  const account = new bankAccount();

  it("it should display the column names of the bank statement", () => {
    expect(account.printStatement()).toEqual(
      "date || credit || debit || balance"
    );
  });
});
