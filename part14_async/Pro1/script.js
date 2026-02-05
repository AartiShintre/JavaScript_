// setTimeout(function(){
// console.log("Hi ");
// },5000)
// console.log("Hello");

let sayArti= function(){
    console.log("Arti");
}
setTimeout(sayArti,2000)

const changeText = function(){
    document.querySelector('h1').innerHTML = "Best JS series"
}
const changeMe = setTimeout(changeText,2000)

document.querySelector('#stop').
addEventListener("click",function(){
clearTimeout(changeMe)
console.log("Stopped");
})