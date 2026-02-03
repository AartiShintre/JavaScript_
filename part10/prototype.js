// let computer = {cpu : 12};
// let lenovo = {screen :"HD",
//     __proto__ : computer,
// };
// let tomHardware = {}

// console.log(lenovo.__proto__);//older method

let genricCar = {tyres : 4};
let tesla = {
    driver : "AI",
};
Object.setPrototypeOf(tesla,genricCar)
console.log(`tesla`,Object.getPrototypeOf(tesla));