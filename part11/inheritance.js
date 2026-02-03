// class Parent{
//     hello(){
//         console.log("Hello");
//     }
// }
// class Child extends Parent{
    
// }
// let obj = new Child();
// obj.hello();

// class Person{
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     work(){
//         console.log("Work");
//     }
// }
// class Engineer extends Person{
//     work(){
//         console.log("Work to build software");
//     }
// }
// class Doctor extends Person{
//     work(){
//         console.log("Work to treat paitent");
//     }
// }

// let Arti = new Engineer();
// Arti.work();




// class Person{
//     constructor(){
//         this.species = "home species";
//     }
//     eat(){
//         console.log("Eat");
//     }
   
// }
// class Engineer extends Person{
//     constructor(branch){
//         super()
//         this.branch = branch;
//     }
//     work(){
//         console.log("Work to build software");
//     }
// }
// let enjObj = new Engineer("CSE enginerring");
// console.log(enjObj);
let Data = "Secrete info"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;

    }
     viewData(){
        console.log("Data : ",Data);
     }
    
}
let stu1 = new User("Arti", "arti@100");
let stu2 = new User("Arya", "arya@200");
console.log(stu1);
console.log(stu2);


class Admin extends User{
    constructor(name, email){
       super(name, email); 
    }
    editData(){
        Data = "Some edited data"
        return Data;
    }
}
let Admin1 = new Admin("Shreeja", "shreeja@300");
console.log(Admin1);
console.log(Admin1.editData());