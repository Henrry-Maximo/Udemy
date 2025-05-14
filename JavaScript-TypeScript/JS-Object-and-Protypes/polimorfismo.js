// Superclass
function Account(agency, account, balance) {
  this.agency = agency;
  this.account = account;
  this.balance = balance;
}

Account.prototype.withdraw = function (value) {
  if (value > this.balance) {
    console.log(`Saldo insuficiente, disponível: ${this.balance}`)
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
      `Balance: R$${this.balance.toFixed(2)}`
  );
};

const account1 = new Account(11, 22, 10); // agência, conta, salado
// console.log(account1); // Account { agency: 11, account: 22, balance: 10 }

account1.depositary(10);
account1.depositary(5);
account1.withdraw(25);

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
    console.log(`Saldo insuficiente, disponível: ${this.balance}`)
    return;
  }

  this.balance -= value;
  this.seeBalance();
};

const cc = new AccountCurrent(11, 22, 0, 100);
cc.depositary(10);
// cc.withdraw(90); // 80
cc.withdraw(110);
cc.withdraw(1);