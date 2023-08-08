//Switch -------------------------------------------- 
// var userName = "ahmed";
// switch(userName){
//      case "mohammed":
//          console.log("Welcome Mohd");
//          break;
//      case "ahmed":
//          console.log("Welcome ahmed");
//          break;
//      case "ali":
//          console.log("Welcome Ali");
//          break; 
//      default:
//          console.log("Thankyou")

//  }

//pre and post increment ------------------------
// var x = 5 ;
// console.log(++x) //6
//  console.log(x++) //6
//  console.log(x) //6
//  console.log(x++) //6
//  console.log(++x) //7
// // console.log(++x) 
// // console.log(x) 

//using SWITCH ==> check if the character is the same as 
//in the variable if yes perform it 

// var char = "+";
// var num1 = 4 ;
// var num2 = 5;

// switch(char){
//     case "+":
//         console.log(num1+num2);
//         break;
//     case "-":
//         console.log(num1-num2);
//         break;
//     case "*":
//         console.log(num1*num2);
//         break;
//     case "/":
//         console.log(num1/num2);
//         break;
//     default:
//         console.log("thanks")
// }

//WHILE LOOP -------------------------------------------

// var y = 1;
// while (y<=10){
//     console.log(y);
//     y++
// }

//DO..WHILE --------------------------------------------
// var x = 1;
// do {
//     console.log(x);
//     x++
// }while(x<=20)

//display the numbers seperately using while loop
// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var x = 0;
// while (x < numbers.length){
//     console.log(numbers[x])
//     x++
// };


//FOR LOOP --------------------------------------------
// for (var x=1 ; x<=10 ; x++){
//     console.log(x)
// }

//display the names seperately
// var names = ["Meera", "Rahaf", "Maram" , "Baraah", "Ibreez"]

// for (var n=0 ; n< names.length; n++){
//     console.log(names[n])
// }

//FUNCTIONS -------------------------------------------
var x = 100 ;
var y = 200 ;
function calSum(){
    console.log(x+y);
}
calSum()


//Return in functions 
var z = 50 ;
var u = 30 ;
function summation(){
    return z+u;
}
console.log(summation()) //we always use console.log when using return 

// //do the calclation based on the numbers and the 
//operator entered by the user

function getChar(n1,n2,char){
    if (char == "+"){
        console.log(n1+n2);
    }else if (char == "-"){
        console.log(n1-n2);
    }else if (char == "*"){
        console.log(n1*n2)
    }else if (char == "/"){
        console.log(n1/n2)
    }else{
        console.log("Error!")
    }
}
getChar(3,5,"/")

//ASSIGNMENT PDF ---------------------------------------
//2-
function getDiv(number){
    if (number % 3 === 0 && number % 4 === 0){
        console.log("Yes")
    }else{
        console.log("No")
    }
}
getDiv(36)

//3- 
function getMaximum(n1,n2){
    if (n1>n2){
        console.log(n1 + " is the maximum")
    }else if (n2>n1){
        console.log(n2 + " is the maximum")
    }else{
        console.log("Numbers are equal")
    }
}
getMaximum(2,3)

//4-
function getInt(num){
    if (num<0){
        console.log("The number is negative")
    }else if (num > 0 ){
        console.log("Thye number is positive ")
    }else{
        console.log("The number is Zero")
    }
}
getInt(-100)

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

//PROBLEM OF THE DAY -----------------------------------------
//user should enter array of numbers and you are giving 
//the number, one of the two numbers that equals the sum
//of the given number



function arrayNum(ele, sum){
    var array = []
    for ( var x = 0 ; x < ele.length ; x++){
        for (var i = n+1 ; i <ele.length ; i++){
            if (ele[i] + ele[i] === sum){
                array.push([ele[n],ele[i]]);
            }
        }
    }
    return array;

}
const numbers = [2,3,4,6,7,8,9];
const sumtofind = 10