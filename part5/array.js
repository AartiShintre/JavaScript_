// check wether the array or not
let array = [];
if(Array.isArray(array)){
    console.log("is array");
}
else{
    console.log("is not array");
}

// check the arary is empty or not
let array2 = [];
if(array.length === 0){
    console.log("array is empty");
}
else{
    console.log("array is not empty");
}

//Declare an array named teaflavor that contain the strings a, b, c, d acces the first elements of arary and store it in firstvar
let array3 = ["a","b","c","d","e"];
let firstvar = array3[0];
console.log(firstvar);

// declare the city name pune, mumbai, kolhapur, sangli acces the third element of array and store it in favcity

let cityarr = ["Pune", "Mumbai", "Kolapur", "Sangli"];
let favcity = cityarr[3];
console.log(favcity);

// you have array name teatypes contaning herbal tea, white tea, black tea change black tea to green tea
let teaarr = ["herbal tea", "white tea", "balck tea"];
 teaarr[2]= "Jasmine tea";
 console.log(teaarr);

 // declare the array cityVisited contaning mubai and pune add kolhapur to array using push method
let cityVisited = ["Mumbai", "Pune"];
cityVisited.push("Kolhapur");
console.log(cityVisited);

//you have array name orders with a, b, c, d remove the last element of array using pop method and store it in varible name lastorder
let order = ["a", "b", "c", "d"];
 let lastOrder = order.pop();
 console.log(lastOrder);
 console.log(order);

 // you have array named  arr containg a, b, c, d create a soft copy of it
 let arr = ["a", "b", "c", "d"];
 let arr2 = arr;
 console.log(arr2);

 //you have array named  arr containg a, b, c, d create a hard copy of it
let arr3 = ["a", "b", "c", "d", "e"];
let hardCopies = [...arr3];
console.log(hardCopies);

//you have two array named europeanCities contaning paris and rome and asiancities contaning tokyo ang bankok merge these two array into new array named worldcities
let europianCities = ["Paris","Rome"];
let asianCities = ["Tokyo", "Bangkok"];
// let worldcities = europianCities + asianCities;
// console.log(worldcities);
// console.log(typeof worldcities);// as type becomes a string not array

let worldcities = europianCities.concat(asianCities)
console.log(worldcities);

// You have array names arrylist containg a, b, c, d find the length of arraylist and store it into arrlen
let arrlist = ["a", "b", "c", "d"];
let arrlen = arrlist.length;
console.log(arrlen);

// you have a arraylist of a, b, c, d check that a is present or not if present store it in variable name islist
let arrlist2 = ["a", "b", "c", "d"];
let islist = arrlist2.includes("a");
console.log(islist);

let arr6 = [250, 645, 300, 900, 50];

for (let i = 0; i < arr6.length; i++) {
    let discount = arr6[i] * 0.10;
    arr6[i] = arr6[i] - discount; // update array
}

console.log("Array after offer:", arr6);


