function fetchData(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let sucess = true;
            if(sucess){
                resolve("Data fectched succesfully")
            }else{
                reject("Error fatching data")
            }
        },3000)
    })
}
let response = fetchData();
