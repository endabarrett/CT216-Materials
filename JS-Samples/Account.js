module.exports.init             = init;
module.exports.debit            = debit;
module.exports.credit           = credit;
module.exports.getTransactions  = getTransactions;
module.exports.printInfo        = printInfo;

var accNumber;
var balance = 0.0;
var translist = [];

function init(accN, bal)
{
    accNumber = accN;
    balance = bal;
}

function debit(amount)
{
    var transaction = {};
    transaction.openingBalance  = balance;
    transaction.transType       = "Debit";
    transaction.amount          = amount;
    
    balance -= amount;
    transaction.closingBalance = balance;
    translist.push(transaction);
}

function credit(amount)
{
    var transaction = {};
    transaction.openingBalance  = balance;
    transaction.transType       = "Credit";
    transaction.amount          = amount;
    
    balance += amount;
    transaction.closingBalance = balance;
    translist.push(transaction);
}

function getTransactions()
{
    return translist;
}

function printInfo()
{
    console.log("Account info...");
    console.log("Number = ", accNumber);
    console.log("Balance = ", balance);
    console.log();
}
