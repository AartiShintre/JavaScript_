const sayDate = function(){
console.log("Arti",Date.now());
}
let intervalId = null;
document.querySelector('#start')
.addEventListener("click", function(){
    intervalId = setInterval(sayDate, 1000);
});


document.querySelector('#stop').
addEventListener("click",function(){
   clearInterval(intervalId)
   console.log("stopped");
})
// clearInterval(intervalId)
