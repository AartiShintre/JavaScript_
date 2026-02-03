console.log("abc".toUpperCase());
console.log([1,2,3].push(4));

function myFun(){
    console.log("Welcome to JS code");
}

myFun();


function myFun2(msg, n){
    console.log(msg, n);
}
myFun2("Welcome Again!!", 5)


//sum of 2 no
function Sum(a, b){
    // console.log(a + b);
    return a + b;
}
console.log(Sum(2, 3));

// arrow function
const arrowfun = (a, b) => {
    return a + b;

}
 console.log(arrowfun(2, 4)); 

 const fun2 = (a, b) =>{
    return a * b;
 }
 console.log(fun2(2, 8));


let calculator = 0;
 const function1 = (p1) =>{
    for(let i of p1){
    if( i=== "a" || i === "e" || i ==="i" || i ==="o" || i ==="u"){
        calculator = calculator + 1;
    }
    }
    console.log(calculator);
 }
 function1("Hello");
 
 // in js function can pass as a parameters
 function Abc(){
    console.log("abc");
 }
 function myFun3(Abc){
    return Abc;
 }
 let res = myFun3(Abc);
 console.log(res);

 //print array using function
 let arr = [1, 2, 3, 4, 5];
 arr.forEach(function printVal(val){
    console.log(val);
 })

 arr.forEach((val) =>{
    console.log(val);
 })

 arr2 = ["pune", "mumbai", "latur"];
 arr2.forEach(function  printVal(val){
    console.log(val.toUpperCase());
 })//heigher order function => the function which takes function as a parameter 

 let array = [2, 3, 4, 5];
 array.forEach((val)=>{
    console.log(val*val);
 })

 //array methods
 //map is used to print new array
 let nums = [22, 33, 44, 55];
 let newarr = nums.map((val)=>{
    return val;
 })
console.log(newarr);

//filter() => to filter all the elements based on the conditin
let arr7 = [1, 2, 4, 3, 5, 6];
let newArr = arr7.filter((val)=>{
   return val % 2 === 0;
})
console.log(newArr);

// reduce()
let arr6 = [1, 2, 3, 4, 5];
let sum = arr6.reduce((res, cur) =>{
    return res + cur
});
console.log(sum);


// for a given marks array calculate the marks is grether than 90
let marks = [90, 88, 98, 57, 94, 93];
let output = marks.filter((val) =>{
    let a = val > 90;
    return a;
})
console.log(output);

// let marks = [90, 88, 98, 57, 94, 93];
// let marks2 = [];
// for(let val of marks){
//     if(val > 90){
//         continue;
//     }
//     marks2.push(val);
// }
// console.log(marks2);


// take a no n as a input from user crete a array of 1 to n use reduce method to calculate the sum of the all no of array and also calculate the product of the array
let n = prompt("Enter a no");
let arr9 = [];
for(let i = 1; i <= n; i++){
    arr9[i-1] =i;
}
console.log(arr9);
