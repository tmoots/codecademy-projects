//Object constructor to store staff names and discounts
function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

//Staff members added as objects
var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);
var me = new StaffMember("Imogen",20);

//Creating cash register object
var cashRegister = {
    total:0,
    lastTransactionAmount:0,
    //Method to add item costs to the total
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    //Method to scan items and quantities
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    //Method to cancel the last transaction
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    //Method to apply a staff member's discount
    applyStaffDiscount: function(employee) {
        this.total -= (this.total * employee.discountPercent/100);
    }
};

//Calling the scan method to add some items
cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);

//Calling the applyStaffDiscount method to take of my discount
cashRegister.applyStaffDiscount(me);

//Printing my total bill, rounded to two decimal places
console.log('Your bill is '+cashRegister.total.toFixed(2));