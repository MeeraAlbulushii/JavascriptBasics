var userName = "Meera";
var age = 25 ; 
var output = `I'm ${userName} and I'm ${  age} years old`

console.log(output);


//ARROW FUNCTION 
const getName = x => console.log(x); //we can use brackets only if there is more than one parameter
getName("Meera")


//print the numbers from 1 to choosed number , even 

const getEven=(number)=>{
    for (let i = 1 ; i <= number ; i++)
    {
        if (i % 2 === 0){
            console.log(i + " this is even") ;
        }else{
            console.log(i + " This is odd")
        }
    }
}

getEven(10)

//SPREAD OPERATOR

// const n1 = [1,2,3,4,5]
// const n2 = n1;
// n1.push(20)
// console.log(n2)

// const num1 = [1,2,3,4,5]
// const num2 = [...num1,6,7,8,9]; //... spread operator
// console.log(num2);

//ARRAY DESTRUCTION

// const names = ["Meera","Rahaf","Maram","Sara","Mariam"];
// const [name1,name2, ...x] = names //rest operator
// console.log(x)

//OBJECT DESTRUCTION

// const user = {
//     userName : "Meera",
//     age : 21,
//     address : "Muscat"
// }
// const {Name, ...data} = user //rest operator
// console.log(data)


//get the second mobile number
// const user = [
//     {
//     userName : "Meera",
//     age : 21,
//     mobile : ["94333129" , "93335288"]
//     }
// ]

// const [{mobile}] = user ; 
// const [mob1,mob2] = mobile
// console.log(mob2)


// Foreach Loop
// const numbers = [1,2,3,4,5,6];
// numbers.forEach(function(el,idx){
//     console.log(el);
// })



//foreach using arrow function
// const names = ["Meera","Rahaf","Maram","Sara","Mariam"];
// names.forEach(arrfun=(n,idx)=>{
//     console.log(n + " " + idx);
// })


// const user = [
//     {
//     userName : "Meera",
//     age : 21,
//     mobile : "94333129",
//     },
//     {
//     userName : "Meera",
//     age : 21,
//     mobile : "94333129",
//     },
//     {
//     userName : "Meera",
//     age : 21,
//     mobile : "94333129", 
//     }
// ]

// const newUser = user.map(el=>console.log(el.userName))


// const getMaxMin=(num1,num2,num3)=>{
//     if (num1 > num2 && num1>num3 && num2 > num3 ){
//         console.log(num1 + " is the Max, " + num3 + " is the Min")
//     }else if (num1 > num2 && num1>num3 && num3 > num2 ){
//         console.log(num1 + " is the Max, " + num2 + " is the Min")
//     }else if (num2 > num1 && num2>num3 && num1 > num3 ){
//         console.log(num1 + " is the Max, " + num3 + " is the Min")
//     }else if (num2 > num1 && num2>num3 && num3 > num1 ){
//         console.log(num2 + " is the Max, " + num1 + " is the Min")
//     }else if (num3 > num1 && num3>num2 && num2 > num1 ){
//         console.log(num3 + " is the Max, " + num1 + " is the Min")
//     }else if (num3 > num1 && num3>num2 && num1 > num2){
//         console.log(num3 + " is the Max, " + num2 + " is the Min")
//     }else{
//         console.log("All numbers are equal")
//     }
// }

// getMaxMin(29,84,90)



//12-
// const getAvg=(n1,n2,n3,n4,n5)=>{
//     const total = n1+n2+n3+n4+n5;
//     const avg = (n1+n2+n3+n4+n5)/5
//     const percentage = (n1+n2+n3+n4+n5)/5

//     console.log(`total is ${total}, average is ${avg}, percentage is ${percentage}%`)
// }

// getAvg(90,93,100,70,55) 


// const getMonth=(m)=>{
//     if(m === 1){
//         console.log("31 Days")
//     }else if(m === 2){
//         console.log("28 Days")
//     }else if(m === 3){
//         console.log("31 Days")
//     }else if(m === 4){
//         console.log("30 Days")
//     }if(m === 5){
//         console.log("31 Days")
//     }else if(m === 6){
//         console.log("30 Days")
//     }else if(m === 7){
//         console.log("31 Days")
//     }else if(m === 8){
//         console.log("31 Days")
//     }else if(m === 9){
//         console.log("30 Days")
//     }else if(m === 10){
//         console.log("31 Days")
//     }else if(m === 11){
//         console.log("30 Days")
//     }else if(m === 12){
//         console.log("31 Days")
//     }else{
//         console.log("Months should be between1 1-12")
//     }
// }
// getMonth(9)

//another simple way 

const getMonth=(m)=>{
    if(m == 1 ||
        m == 3 ||
        m == 5 ||
        m == 7 ||
        m == 8 ||
        m == 10 ||
        m == 12 ){
            console.log("this month has 31 days")
        }else if(m == 2){
            console.log("this month has 28 days")
        }else if(m == 4 || m == 6 || m == 9 || m == 11){
            console.log("this month has 30 days")
        }else{
            console.log("the number is out of")
        }
}

getMonth(9)


