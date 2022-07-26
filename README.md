# Bank Account

This is a command line application that allows a user to view their bank statement. The statement includes the dates of their transactions, their credit, debit and balance.

## Specification

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

### User Stories

```
As an account owner
So that I can store my money in my account
I would like to deposit money in my account
```

```
As an account owner
So that I can access money inside my account
I would like to withdraw money from my account
```

```
As an account owner
So that I am aware of the activity of my account
I would like to see a statement of my account with dates, credits, debits and balances
```

```
As an account owner
So that I can have regular access to my account
I would like to make withdrawals and deposits from my account on multiple days
```

## Diagrams

### UML Class Diagram

This diagrams displays the main class of this command line application - BankAccount.

```mermaid
classDiagram
class BankAccount
BankAccount: -Array this.transaction
BankAccount: -Integer this.index
BankAccount: -Array this.balance
BankAccount: +transactionDate(date)
BankAccount: +addDeposit(amount)
BankAccount: +addWithdrawal(amount)
BankAccount: +calculateBalance()
BankAccount: +printStatement()
```

### Inputs and Outputs

This diagram displays the expected inputs and outputs of this application.

| input                                                                                                                                                                  | output                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| bankAccount.transactionDate("14/01/2023"); bankAccount.addDeposit(1000); bankAccount.calculateBalance(); bankAccount.printStatement();                                 | date \|\| credit \|\| debit \|\| balance 14/01/2023 \|\| 1000 \|\| \|\| 1000    |
| bankAccount.transactionDate("14/01/2023"); bankAccount.addDeposit(1000); bankAccount.addWithdrawal(500); bankAccount.calculateBalance(); bankAccount.printStatement(); | date \|\| credit \|\| debit \|\| balance 14/01/2023 \|\| 1000 \|\| 500 \|\| 500 |
| bankAccount.transactionDate("14/01/2023"); bankAccount.addDeposit(1000); bankAccount.addWithdrawl(2000); bankAccount.calculateBalance(); bankAccount.printStatement(); | This withdrawal exceeds the current balance.                                    |

## Technologies

This command line application was created using

- Eslint v8.20.0
- Jest v28.1.2
- Node v18.5.0
- Npm v8.12.1
