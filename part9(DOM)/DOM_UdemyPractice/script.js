// // console.log("Hello");
// // alert("Arti")
// // console.log(window);
// // console.log("Hello");
// // window.console.log("Hello2")
// // window.alert("Hello")
// console.dir(document.body);

// // DOM Manupiation
// // selecting with id
// let heading = document.getElementById("heading")
// console.log(heading);

// //selecting with class
// let heading_2 = document.getElementsByClassName("heading2")
// console.log(heading_2);
// console.log(heading_2)

// //selecting with tag
// let paras = document.getElementsByTagName("p")
// console.log(paras);

// //Query Selector

// let elements = document.querySelector("p")
// console.dir(elements);

//below all are the console output here i pasted for understanding
// document.querySelector('h1')
// <h1 id=​"title">​JavaScript DOM Fun Examples​</h1>​
// document.querySelector('h3')
// <h3>​Accesing DOM Elements​</h3>​
// document.querySelectorAll('h1')
// NodeList [h1#title]0: h1#titlelength: 1[[Prototype]]: NodeList
// document.querySelector('ul')
// <ul id=​"citiesList">​…​</ul>​
// const myul = document.querySelector('ul')
// undefined
// myul.querySelector('li')
// <li class=​"chai">​::marker​"New York"</li>​
// const turngreen = myul.querySelector('li')
// undefined
// turngreen.style.backgroundColor = "Red"
// 'Red'
// turngreen.innerText = "Caneda"
// 'Caneda'
// turngreen.innerHTML = "Sigapor"
// 'Sigapor'

// Query selectorAll =>not an arary but act like it
// const tempList = document.querySelectorAll('li')
// undefined
// tempList
// NodeList(12) [li.chai, li, li, li, li, li, li, li, li, li.teaItem, li.teaItem, li.teaItem]
// tempList.style.color = 'green'
// VM2242:1 Uncaught TypeError: Cannot set properties of undefined (setting 'color')
//     at <anonymous>:1:22
// (anonymous) @ VM2242:1
// [NEW] Explain Console errors by using Copilot in Edge: click
         
//          to explain an error. 
//         Learn more
//         Don't show again
// tempList[0].style.color = "yellow"
// 'yellow'


//udemy challenges

//example 1(Challenge 1)
// let hold = document.getElementById("changeTextButton");
// console.log(hold);
// let hold2 = document.addEventListener("click",function(){
//     console.log(this);
// });

// let hold = document.getElementById("changeTextButton");
// console.log(hold);
// let hold2 = document.addEventListener("click",function(){
//    let paragraph = document.getElementById("myparagraph")
//    //console.log(paragraph);
//    paragraph.textContent = "The paragraph is changed"

// });


// // example 2 (challenge 2)traversal and highlight 
// document.getElementById("highlightFirstCity").
// addEventListener("click",function(){
//     let citiesList = document.getElementById("citiesList");
//     //console.log(citiesList);
//    // console.log(citiesList.firstElementChild);
//    citiesList.firstElementChild.classList.add("highlight")

// })


// example-3 (challange3)
// document.getElementById("changeOrder").
// addEventListener("click",function(){
//     let coffeeType = document.getElementById("coffeeType")
//     coffeeType.textContent = "Espresso"
//     coffeeType.style.backgroundColor = "brown";
//     coffeeType.style.padding = "5px";
// });


//example 4
// document.getElementById("addNewItem")
// .addEventListener("click",function(){
//    let newItem = document.createElement('list')
//    newItem.textContent = "Egg"
//    document.getElementById("shoppingList").appendChild(newItem);

// });

//example5
// document.getElementById("removeLastTask")
// .addEventListener("click",function(){
//     let taskList = document.getElementById("tasksList")
//     taskList.lastElementChild.remove();
// });

// //example6
// document.getElementById("clickMeButton").
// addEventListener("dblclick",function(){
//     alert("chaicode");

// });

// //example7
// document.getElementById("teaList").
// addEventListener("click",function(event){
// if(event.target){
//     alert("You selected  : "  +event.target.textContent)
// }
// });

// //example 8
// document.getElementById("feedbackForm").
// addEventListener('submit',function(event){
//     alert("Submited")

// });
const parent = document.querySelector('.parent')
console.log(parent);