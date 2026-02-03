//asynchronous ==> having pause
function sayHello(){
    console.log("I would like to say hello");
}
function printNum(){
    for(let i = 0; i < 10; i++){
        console.log(i);
    }
}
setTimeout(()=>{
    sayHello();
    printNum();
},3000)

