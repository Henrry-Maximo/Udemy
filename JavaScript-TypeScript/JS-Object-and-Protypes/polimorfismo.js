// Superclass
function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (value > this.balance) {
    console.log(`Balance insufficient, available: ${this.balance} | Time: ${new Date().toJSON()}`)
    return;
  }

  this.balance -= value;
  this.seeBalance();
};

Account.prototype.depositary = function (value) {
  this.balance += value;
  this.seeBalance();
};

Account.prototype.seeBalance = function () {
  console.log(
    `Agency/Account: ${this.agency}/${this.account} | ` +
      `Balance: R$${this.balance.toFixed(2)} | Time: ${new Date().toJSON()}`
  );
};

const account1 = new Account(11, 22, 10); // agência, conta, salado
// console.log(account1); // Account { agency: 11, account: 22, balance: 10 }

// account1.depositary(10);
// account1.depositary(5);
// account1.withdraw(25);

function AccountCurrent(agency, account, balance, limit) {
  Account.call(
    this.agency = agency,
    this.account = account,
    this.balance = balance,
  );

  this.limit = limit;
};

AccountCurrent.prototype = Object.create(Account.prototype);
AccountCurrent.prototype.constructor = AccountCurrent;

AccountCurrent.prototype.withdraw = function (value) {
  if (value > (this.balance + this.limit)) {
    console.log(`Balance insufficient, available: ${this.balance} | Time: ${new Date().toJSON()}`)
    return;
  }

  this.balance -= value;
  this.seeBalance();
};

function AccountSavings(agency, account, balance) {
  Account.call(
    this.agency = agency,
    this.account = account,
    this.balance = balance,
  );
};

AccountSavings.prototype = Object.create(Account.prototype);
AccountSavings.prototype.constructor = AccountSavings;

const cc = new AccountCurrent(11, 22, 0, 100);
// cc.depositary(10);
// cc.withdraw(90); // 80
// cc.withdraw(110);
// cc.withdraw(1);

const cp = new AccountSavings(12, 33, 0);
cp.depositary(10);
cp.withdraw(11);
// cp.withdraw(1);