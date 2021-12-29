// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num= prompt("Enter any valid number");
if(num%2==0) {
  alert("Number is Even");
}
else{
  alert("Number is Odd");
}
2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let numA=Number(prompt("Enter first number")), numB=Number(prompt("Enter second number"));
if (numA>numB){
  alert(numA);
}
else{
  alert(numB);
}

// 3. Convert the above code using`?` terniary operator
// let numA=Number(prompt("Enter first number")), numB=Number(prompt("Enter second number"));
// numA>numB? alert(numA): alert(numB);

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName= prompt("Enter your House Name");
if (houseName=="stark"){
  alert("Winter is coming");
}
else if(houseName=="lannister") {
  alert("A lannister always pays his debt");
}
else{
  alert("All men must die");
}

// 5. Convert the above code using`?` terniary operator
let houseName= prompt("Enter your House Name");
houseName==="stark"? alert("winter is coming") : alert("");
houseName="lannister"? alert("Lannister always pays his debt"): alert("");
houseName="none"? alert("all men must die"):alert();


// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let numMonth=Number(prompt("Enter number of month"));
numMonth<=12;
if (numMonth%2===1 && numMonth<=7){
  alert("Number of days in this month are 31");
}
else if(numMonth%2===0 &&numMonth<=7) {
  alert("Number of days in this month are 30");
}
else if (numMonth%2==0 && numMonth>7 && numMonth<=12) {
  alert("Number of days in this month are 31");
}
else if (numMonth%2==1 && numMonth>7 && numMonth<12){
  alert("Number of days in this month are 30");
}
else{
  alert("invalid number");
}


/* 7.
- Write a program that take the salery of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amoun from salery.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
monthlySalary=prompt("Enter your Salary");
if (monthlySalary<=20000){
  monthlySalary=monthlySalary-monthlySalary*0.1;
  alert(`Your Monthly salary is ${monthlySalary}`);
}
else if (monthlySalary<=40000){
  monthlySalary=monthlySalary-monthlySalary*0.2;
  alert(`Your Monthly salary is ${monthlySalary}`);
}
else if (monthlySalary>=50000){
  monthlySalary=monthlySalary-monthlySalary*0.3;
  alert(`Your Monthly salary is ${monthlySalary}`);
}
else {
  alert("invalid");
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

// If-else statement:
let studentMarks= prompt("Enter your marks out of 100");
if(studentMarks>100){
  alert(`Marks can't be greater than 100`);
}
else if(studentMarks>80 && studentMarks<100){
  alert(`Grade A`);
}
else if(studentMarks>50 && studentMarks<80) {
  alert(`Grade B`)
}
else if(studentMarks>30 && studentMarks<50) {
  alert(`Grade C`)
}
else {
  alert(`Grade D`)
}

// Switch-Statement:
let studentMarks= prompt("Enter your marks out of 100");
switch(true){
  case studentMarks >100:
    alert(`Marks can't be greater than 100`);
    break;
  case studentMarks>80 && studentMarks <100:
    alert(`Grade A`);
    break;
  case studentMarks>50 && studentMarks <80:
    alert(`Grade B`);
    break;
  case studentMarks>30 && studentMarks <50:
    alert(`Grade C`);
    break;
  default:
    alert(`Grade D`);
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weatherCondition= prompt("What is the weather like outside?");
switch(true) {
  case weatherCondition=="sunny":
    alert("wear a T-shirt");
    break;
  case weatherCondition=="rainy":
    alert(`Don't forget to take your raincoat`);
    break;
  case weatherCondition=="hot":
    alert(`Get a hanky`);
    break;
  case weatherCondition=="freezing":
    alert(`Get your sweeter on`);
    break;
  default:
    alert(`Not a valid input`);
}