const obj = {
    firstName : "Arti",
    isloggedin : true,

};// even though we cant chnge the value of const but in non premitive datatype object are unmutable 
obj.firstName = "Aarya";
console.log(obj.firstName);
console.log(typeof obj);


let today = new Date();
console.log(today.getDate());

//Array
let heros = ["A","B","C",true]
let anotherUser = ["Arti","Shintre",true]
console.log(anotherUser[1]);
console.log("1"+1);
let istrue = true;
console.log(istrue+1);
let istruee = "1";
console.log(Number(istruee));

let istrueee = true;
console.log(Number(istruee));

let istrueeee = "1";
console.log(typeof Number(istruee));