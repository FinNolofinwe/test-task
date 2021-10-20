
// Задание 3

let  url = "http://jsonplaceholder.typicode.com/users";
let arr = new Array;

async function getResponse() {
  let response = await fetch(url);
  let content = await response.json();
  for (let key in content) {
    arr.push(`${content[key].name} ${content[key].username}`);
  }
  console.log(arr);
  while(arr.length > 8 ){
    arr.splice(Math.floor(Math.random()*arr.length), 1)
  }
  console.log(arr);

}

getResponse();
