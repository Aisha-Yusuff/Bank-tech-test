const Account = require("../lib/account");
const Transaction = require("../lib/transaction");

describe("Account", () => {
  it("displays a statement for multiple dates, deposits and a withdrawal", () => {
    const bankAccount = new Account();
    bankAccount.addTransaction(new Transaction("10/01/2023", 1000, "deposit"));
    bankAccount.addTransaction(new Transaction("13/01/2023", 2000, "deposit"));
    bankAccount.addTransaction(
      new Transaction("14/01/2023", 500, "withdrawal")
    );
    bankAccount.calculateBalance();
    bankAccount.createStatement();
    expect(bankAccount.printStatement()).toEqual(
      "date || credit || debit || balance" +
        "\n" +
        "14/01/2023 || || 500.00 || 2500.00" +
        "\n" +
        "13/01/2023 || 2000.00 || || 3000.00" +
        "\n" +
        "10/01/2023 || 1000.00 || || 1000.00"
    );
  });

  it("returns a string if a withdrawal is larger than the account's balance", () => {
    const bankAccount = new Account();
    bankAccount.addTransaction(new Transaction("10/01/2023", 1000, "deposit"));
    bankAccount.addTransaction(new Transaction("13/01/2023", 2000, "deposit"));
    bankAccount.calculateBalance();
    expect(bankAccount.overdrawn()).toBe(
      "This withdrawal exceeds your account's current balance. All withdrawals must be below the account's balance"
    );
  });
});
