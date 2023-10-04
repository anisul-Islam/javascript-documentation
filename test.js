class Transaction {
  constructor(amount, date) {
    this.amount = amount;
    this.date = date;
  }
}

class Customer {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.transactions = [];
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getTransactions() {
    return this.transactions;
  }

  getBalance() {
    return this.transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );
  }

  addTransaction(amount) {
    if (amount < 0) {
      console.error("Transaction amount cannot be negative.");
      return false;
    }

    const date = new Date();
    const transaction = new Transaction(amount, date);
    this.transactions.push(transaction);
    return true;
  }
}

class Branch {
  constructor(name) {
    this.name = name;
    this.customers = [];
  }

  getName() {
    return this.name;
  }

  getCustomers() {
    return this.customers;
  }

  addCustomer(customer) {
    if (!this.customers.includes(customer)) {
      this.customers.push(customer);
      return true;
    }
    return false;
  }

  addCustomerTransaction(customerId, amount) {
    const customer = this.customers.find((c) => c.getId() === customerId);
    if (customer) {
      return customer.addTransaction(amount);
    }
    return false;
  }
}

class Bank {
  constructor(name) {
    this.name = name;
    this.branches = [];
  }

  addBranch(branch) {
    if (!this.branches.includes(branch)) {
      this.branches.push(branch);
      return true;
    }
    return false;
  }

  addCustomer(branch, customer) {
    if (this.branches.includes(branch)) {
      return branch.addCustomer(customer);
    }
    return false;
  }

  addCustomerTransaction(branch, customerId, amount) {
    const targetBranch = this.branches.find(
      (b) => b.getName() === branch.getName()
    );
    if (targetBranch) {
      return targetBranch.addCustomerTransaction(customerId, amount);
    }
    return false;
  }

  findBranchByName(branchName) {
    return this.branches.filter((branch) => branch.getName() === branchName);
  }

  checkBranch(branch) {
    return this.branches.includes(branch);
  }

  listCustomers(branch, includeTransactions) {
    if (this.branches.includes(branch)) {
      console.log(`Customers of ${branch.getName()}:`);
      branch.getCustomers().forEach((customer) => {
        console.log(`Customer: ${customer.getName()}`);
        if (includeTransactions) {
          console.log("Transactions:");
          customer.getTransactions().forEach((transaction) => {
            console.log(
              `Amount: ${transaction.amount}, Date: ${transaction.date}`
            );
          });
        }
        console.log(`Balance: ${customer.getBalance()}`);
        console.log("---");
      });
    } else {
      console.error("Branch not found.");
    }
  }
}

// Example usage:
const bank = new Bank("My Bank");
const branch1 = new Branch("Branch 1");
const branch2 = new Branch("Branch 2");

const customer1 = new Customer("Alice", "C1");
const customer2 = new Customer("Bob", "C2");

bank.addBranch(branch1);
bank.addBranch(branch2);
bank.addCustomer(branch1, customer1);
bank.addCustomer(branch2, customer2);

customer1.addTransaction(100);
customer1.addTransaction(-50); // This should print an error.

bank.addCustomerTransaction(branch1, "C1", 200);

bank.listCustomers(branch1, true);
