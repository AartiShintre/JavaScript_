function Outer(){
    let counter = 4;
    return function(){
        counter++;
        return counter;
    }
}
let increment = Outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());