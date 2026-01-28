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