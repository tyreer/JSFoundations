(function(exports) {
   
    "use strict"
    
    //Define constants
    var TAX_RATE = .085;
    
    exports.buy = function() {
        
        //Define variables
        var purchaseAmount = 0;
        var phonesPurchased = 0;
        var accessoriesPurchased = 0;
        
        var bankAccountBalance = 1000; 
       
       //Define constants
        var PHONE_PRICE = 100;
        var ACCESSORY_PRICE = 80;
        
        var SPENDING_THRESHOLD = 850;
        
        //Loop purchases phones until there are not enough funds in bank account to buy another
        while (purchaseAmount < bankAccountBalance-PHONE_PRICE) {
            purchaseAmount += PHONE_PRICE;
            phonesPurchased++;
        }
         
        //Loop purchases accessories until spending threshold is reached
        while (purchaseAmount < SPENDING_THRESHOLD) {
            purchaseAmount += ACCESSORY_PRICE;
            accessoriesPurchased++;
        }
        
        //Apply tax
        if (purchaseAmount + ACCESSORY_PRICE > SPENDING_THRESHOLD ){
            purchaseAmount = this.addTax(purchaseAmount);
        }
        
        //Check the purchase amount against your bank account balance
        if (bankAccountBalance > purchaseAmount){
            purchaseAmount = this.formatPrice(purchaseAmount);
            console.log("Congrats! You bought " + phonesPurchased + " phones and " + accessoriesPurchased + " accessories.\nTotal cost: " + purchaseAmount);
        }else {
            purchaseAmount = this.formatPrice(purchaseAmount);
            bankAccountBalance = this.formatPrice(bankAccountBalance);
            console.log("Sorry, you can't afford " + phonesPurchased + " phones and " + accessoriesPurchased + " accessories.\nTotal with tax: " + purchaseAmount + "\nBank balance: " + bankAccountBalance);
        }
    };
   
   // Calculate tax and expose the various helper functions as methods
    exports.addTax = function(amount) {return amount += (TAX_RATE * amount); };
   
    //Format the price with a "$" and rounding to two decimal places AND expose the various helper functions as methods
    exports.formatPrice = function(amount) {return "$" + amount.toFixed(2);};
     
     //Just a non-functional example of exporting a value. Could use a getter or a setter to make this easier
     exports.TAX_RATE = function() {return TAX_RATE};
    

})(global.phoneModule = {});

phoneModule.buy();
console.log(phoneModule.TAX_RATE());