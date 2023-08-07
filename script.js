/*var Student = {
        uname : "Meera",
        age : 21,
        address : "AlSeeb"
}

console.log(Student.uname , Student.age , Student.address)*/

//math floor and math random
/*var user = {
    name : "Alex",
    age : "34",
    phone:  Math.floor(Math.random()*10000000000)
}
console.log(user.phone);  */



//conditions
/*var user = {
    uname : "Jhon",
    age: 18,
    gender: "male",
    specilization : "IS"
}*/

/* if (user.age >= 18){
    console.log(user)
} else {
   console.log("Sorry !")
}*/

//logial oprators
/*if (uname === "Jhon" && age === 18){
    console.log("Welcome Jhon")
}else{
    console.log("You're not registered..");
}
*/
/*
var userName = "Ahmed" */
/*
switch(userName)
{
    case "mohamed":
        console.log("welcome mohamed");
        break;
    case "Ahmed":
        console.log("welcome Ahmed");
        break;
    case "Ali":
        console.log("Welcome Ali");
        break;
    default:
        console.log("Thank you..")
}
*/


//SWITCH condition
/*
var char= '+';
var x = 3;
var y=5;

switch (char){
    case "-":
        console.log(x-y);
        break;
    case "+":
        console.log(x+y);
        break;
    case "*":
        console.log(x*y);
        break;
    case "/":
        console.log(x/y);
        break;
    default:
        console.log("Thanks")     
}
*/

//While loop
/*
var x = 1

while(x<=50){
    
    console.log(x);
    x++
}
*/
 //Do..While
 /*
 var x = 1

 do{
     
     console.log(x);
     x++
 }while (x <=50);
*/
/*
 var numbers = [1,2,3,4,5,6,7,8,9,10]
var x = 0;
 while(x < numbers.length){
    console.log(numbers[x]);
    x++
 }
 */

 //FOR LOOP
/*
 for (var x = 1 ; x <= 20 ; x++){
    console.log(x);
 }
*/

// var y = ["Meera","Maram","Rahaf","Baraah","Sara"];

// for(var i = 0 ; i < y.length ; i++ ){
//     console.log(y[i]);
// }


//FUNCTIONS
//  var x = 100;
//  var y = 200 ; 
//  function calSum(){
//     console.log(x+y);

//  }

//  calSum()


//Return in functions
// var x = 50 ;
// var y = 30 ; 

// function getTotal(){
//     var total = x+y;
//     return total;
// }

// // console.log(getTotal())


// //do the calclation based on te numbers and the operator entered by the user
// function getChar(num1,num2,char){
//     if(char == "+"){
//         console.log(num1 + num2)
//     }else if(char == "-"){
//         console.log(num1 - num2)
//     }else if(char == "*"){
//         console.log(num1 * num2)
//     }else if(char == "/"){
//         console.log(num1 / num2)
//     }else{
//         console.log("Error!!")
//     }
// } 

// getChar(4,2,"/")

// //ASSSIGNMENT
// //2- 
// function getDiv(number){
//     if (number%3 === 0 && number%4 === 0){
//         console.log("Yes")
//     }else{
//         console.log("No")
//     }
// }

// getDiv(36)

// //3- 
// function getMax(n1,n2){
//     if (n1 > n2 ){
//         console.log(n1)
//     }else if(n2>n1){
//         console.log(n2)
//     }else{
//         console.log("Numbers are equal")
//     }
// }

// getMax(4,10)

// //4- 
// function getInt(num){
//     if (num < 0){
//         console.log("The number is negative")
//     }else if (num > 0 ){
//         console.log("The number is positive")
//     }else{
//         console.log("The number is zero")
//     }
// }
// getInt(-9)

// //5- 
// function getMaximum(n1,n2,n3)
// {
//     if (n1 > n2 && n1 >n3 && n3 < n2 ){
//         console.log(n1 + " is the maximum and "+n3 +" is the minimum")
//     }else if (n1 > n2 && n2 < n3 && n1>n3){
//         console.log(n1 + " is the maximum "+ n2 + " is the minimum")
//     }else if (n2 > n1 && n2 >n3 && n1 >n3){
//         console.log(n2 + " is the maximum " + n3 +" is the minimum" )
//     }else if (n2>n1 && n2>n3 && n3>n1){
//         console.log( n2 + " is the maximum " + n1 + " is the minimum")
//     }else if (n3 > n2 && n3 >n1 && n2 > n1){
//         console.log(n3 + " is the maximum " + n1 + " is the minimum")
//     }else if(n3>n2 && n3>n1 && n1>n2){
//         console.log(n3 + " is the maximum " + n2 + " is the minimum ")
//     }
//     else{
//         console.log("All numbers are equal")
//     }
// }
// getMaximum(20,40,3)

// //6-
// function checkEvenOdd(number){
//     if (number % 2 == 0 ){
//         console.log("Even")
//     }else{
//         console.log("Odd")
//     }
// }

// checkEvenOdd(4)

// //8-
// function getVow(word){
//     if ("a" === word[0] ){
//         console.log("Vowel")
//     }else if ("e" === word[0] ){
//         console.log("Vowel")
//     }else if ("i" === word[0] ){
//         console.log("Vowel")
//     }else if ("o" === word[0] ){
//         console.log("Vowel")
//     }else if ("u" === word[0] ){
//         console.log("Vowel")
//     }else{
//         console.log("Consonant")
//     }
// }

// getVow("oman")
// getVow("Meera")

// //9- 
// function printNum(n){
//     for ( x=1 ; x <= n ; x++){
//         console.log(x)
//     }
// }
// printNum(10)


// //10- 
// function getMulTable(num){
//     for (var x = 1 ; x <= 12 ; x++){
//         console.log(num*x);
//     }
// }

// getMulTable(5)

//11-
function getEven(num){
    for ( var x = 1 ; x <= num ; x++){
       if(x%2===0){
        console.log(x)
       }
    }
}
getEven(10)