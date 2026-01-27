// check the no is grether than other
let a = 10;
let b = 11;
if(a > b){
    console.log(a,"is grether");
}
else{
    console.log(b,"is grether");
}

// check the string is equal to other
let string1 = "Chai";
let string2 = "chaio"
if(string1 == string2){
    console.log("Equal to each other");
}
else{
    console.log("Not equal");
}

//checking a variable is number or not
let score = 22;
if(typeof score === 'number'){
    console.log("is number");
}else{
    console.log("is not number");
}

//checking is arary or not
let array = [];
if(Array.isArray(array)){
    console.log("is array");
}
else{
    console.log("not array");
}

//checking the boolean value is true or false
let isbool = false;
if(isbool){
    console.log("is true ");
}else{
    console.log("is false");
}

//checking the array is empty or not
let array1 = [];
if(array1.length === 0){
    console.log("Array is empty");
}else{
    console.log("Array is not empty");
}