const url = "https://catfact.ninja/fact"
// let promise = fetch(url)
// console.log(promise);

const getFacts = async()=>{
    console.log("Getting data ....");
    let response = await fetch(url);
    console.log(response);
  let data = response.json();
  console.log(data[0].text);
  
}