class ToyotaCar{
    start(){
        console.log("Start the car");
    }
    stop(){
        console.log("Stop the car");
    }
    setBrand(brand){
        this.brandName = brand;
    }
}
let fortuner = new ToyotaCar();
console.log(fortuner);
console.log(fortuner.start());
let punch = new ToyotaCar();
punch.setBrand("Sieera");
console.log(punch);