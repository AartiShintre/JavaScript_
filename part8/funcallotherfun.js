function cutintopiece(fruit){
    return fruit * 4;
}

function fruitProcesser(apple, orange){
const applepiece = cutintopiece(apple);
const orangepiece = cutintopiece(orange);
const msg = `juice with ${applepiece} of apple piece and ${orangepiece} of orange piece`
return msg;
}
console.log(fruitProcesser(2, 3));