// Premitive datatype(call by value): number null, undefined, boolean, big Int, string, symbol
// Non primitive datatype( call by reference) object, array, function

// var a = 12;

let a = 12;
let string = "Arti";
let isbool = true;
let ab;

console.log(typeof(a))
console.log(typeof(string))
console.log(typeof(isbool))
console.log(typeof(ab))

//object
let types = ["Arti", "Aarya", "Shreeja", "Shreemayi"]
let user = {firstname : "Arti", lastname:"Shintre"}
console.log(user)
console.log(types)

let getscore = a;
console.log(getscore)