//states => pending, fullfileld, rejected
const promiseone = new Promise(function(resolve, reject){
    //Do a async task
    setTimeout(function(){
        console.log("Async task is completed");
        resolve()
    },1000)
})

promiseone.then(function(){
    console.log("Promise comsumed");
}) //=>.then() has directly connection to resolve

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("promise consumed2");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username : "Arti", email : "aartishintre100@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
console.log(user);
})

const promoisefour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username : "Arti", email : "aartishintre100@gmail.com"})
        }else{
            reject('ERROR : something wnt wrong')
        }
    },1000)
})
promoisefour.then((user)=>{
    console.log(user);
    return user.username 
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log("Promise is either resolved or rejected"))

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Arti", email : "aartishintre100@gmail.com"})
        }else{
            reject('ERROR : JS went wrong')
        }
    },1000)
})
async function consumePromiseFive(){
    const response = await promiseFive
    console.log(response);

}
consumePromiseFive()