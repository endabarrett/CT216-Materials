var account = require("./Account");

account.init("92489274", 200.00);

account.printInfo();

account.credit(100.0);
account.printInfo();

account.debit(9.99);
account.printInfo();

list = account.getTransactions();


// process the array
for(var t in list)
{
    console.log(list[t]);
    
    console.log("Opening Balance = ", list[t].openingBalance);
    console.log("Closing Balance = ", list[t].closingBalance);
    console.log("Amount = ", list[t].amount);
    console.log("Transaction Type = ", list[t].transType);    
}
