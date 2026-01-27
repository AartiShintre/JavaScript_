
let sum = 0;
let a = 1;
while(a <= 5){
    sum = sum + a
    a++;
}
console.log(sum);

let count = []
let i = 5;
while(i >= 1){
    count.push(i);
    i--;
}
console.log(count);

//

// let collection = [];
// let tea;

// do {
//     tea =console.log("Enter your fav tea");
//     if(tea !== "stop"){
//         collection.push(tea);
//     }
    
// } while (tea !== "stop");


//wap to take a array [2, 4, 6] and multiply wach of element by 2 and store the array in multipliedNum
let arr = [2, 4, 6]
let multipledNum = []
for(let i = 0; i < arr.length; i++){
    //  takeNum = arr[i] * 2;
    //  multipledNum.push(takeNum)
    multipledNum.push(arr[i]*2)

}
console.log(multipledNum);


let cities = ["Paris","New York", "Tokyo", "Landon"];
let cityList = [];
for(let i = 0; i< cities.length; i++){
   const c = cities[i]
    cityList.push(c);

}
console.log(cityList);


// write a for loop through the array ["A","B","C","D"] and stop the loop when it finds c store all elemnets before c in new array named newArr
let arr1 = ["A", "B", "C", "D"];
let newarr = []
for(let i = 0; i < arr1.length; i++){
    if(arr1[i] === "C"){
        break;
    }
    newarr.push(arr1[i]);
   
}
 console.log(newarr);

 //Write a for loop through the array ["A", "B", "C", "D"] and skip C store other cities named visitedEle

 let arr2 = ["A", "B", "C", "D"];
 let visitedEle = [];
 for(let i = 0; i < arr2.length; i++){
    if(arr2[i] === "C"){
        continue;
    }
    visitedEle.push(arr2[i]);
 }
 console.log(visitedEle);

 // write a for-of loop through the array [1, 2, 3, 4] and stop the loop when it finds c store all elemnets before c in new array named newArr
 let arr3 = [1, 2, 3, 4, 5]
 let newArr2 = [];
 for(const num of arr3){
    if(num === 4){
        break;
    }
    newArr2.push(num);
 }
 console.log(newArr2);


 


str = "JavaScript"
for(let num of str){
    console.log(num);
}

//for in loop
 let citiesPopulation = {
    Landon : 100000,
    New_york : 20000,
    Paris : 30000,
    Barlin : 40000
 }

 for(let num in citiesPopulation){
    console.log(num);
    console.log(citiesPopulation[num]);
 }
  let cityPopulation = {};
 console.log(Object.keys(citiesPopulation));
 console.log(Object.values(citiesPopulation));

 //create a game where you start with any random game ask user ti keep guess the no untill user enter correct val
 let gameNum = 25;
let userNum = prompt("Guess a number");

while (userNum != gameNum) {
  userNum = prompt("Wrong guess  Try again:");
}

console.log(" Congratulations! You guessed the correct number");

