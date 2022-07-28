const Transaction = require("../lib/transaction");

describe(Transaction, () => {
  it("constructs a class with date, amount and type arguments", () => {
    const transaction = new Transaction("25/12/2022", 500, "deposit");
    expect(transaction.date).toBe("25/12/2022");
    expect(transaction.amount).toEqual(500);
    expect(transaction.type).toBe("deposit");
  });
});
