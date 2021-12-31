/*
🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted like ($334.76).
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
*/

const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var quantityofPhone;

var bank_balance = 303.91;
var amount = 0;
let purchaseAmount= PHONE_PRICE;
let calculated_purchaseAmount = purchaseAmount + purchaseAmount * TAX_RATE;
let i;
// while(bank_balance!=0){
//     amount=amount + PHONE_PRICE;
//     for(i=1; i<4; i++){
//         purchaseAmount= PHONE_PRICE;
//         if(purchaseAmount < SPENDING_THRESHOLD){
//             purchaseAmount = purchaseAmount + ACCESSORY_PRICE;
//             calculated_purchaseAmount = purchaseAmount + purchaseAmount * TAX_RATE;
//             alert(`Calculated purchase amount is $ ${calculated_purchaseAmount}`);
//         }
//         else{
//             alert("no money");
//         }
//     }
//     bank_balance=bank_balance -calculated_purchaseAmount;
//     if(bank_balance < calculated_purchaseAmount){
//         alert("You cannot afford it");
//     }
//     else{
//         alert("Phone bought");
//     }
    
// }
while(amount<bank_balance){
    amount+= PHONE_PRICE;
    if(amount<SPENDING_THRESHOLD){
        amount+=ACCESSORY_PRICE;
    }
}
let tax= amount * TAX_RATE;
let taxedAmount = amount + tax;
console.log(`$ ${taxedAmount}`);
if(taxedAmount < bank_balance){
    alert("You can afford it");
}
else{
    alert("you cant afford it");
}

// your code goes here

// ⛑ Answer of the above will `$334.76`.
