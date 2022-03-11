function delay(data, time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, time);
  });
}

async function requestData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log(res);
  const json = await delay(res.json(), 3000);
  console.log(json);
  const title = await delay(json.title, 3000);
  console.log(title);

  return 10;
}

async function requestData2() {
  const temp = await requestData();
  console.log(typeof temp);
  console.log(temp + 5)
  requestData()
  .then((value) => console.log(value + 5));
}

requestData2()
.then(value => console.log(value));
// function delays(ms) {
//     return new Promise(resolve => setTimeout(resolve,ms));
// }
// // resolve value == undefined , null
// // state fulfilled 
// delays(3000).then(() => console.log('asds'));



fetch('https://jsonplaceholder.typicode.com/todos/1').
then((response) => {
  return new Promise((resolve)=>{
    resolve(response.json());
  });
}).
then(json => {
  return new Promise((resolve)=>{
    console.log('ddd');
    resolve(json.title);
  });
}).
then(json => {
  delay(json, 3000);
});

// function delay(data, ms) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(()=>{
//       resolve(data);
//     }, ms);
//   });
// }
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then((json)=> delay(json,1000))
//   .then(json => { 
//     console.log(json)
//     return json;
//   })
//   .then( (json)=> delay(json,2000))
//   .then( (result) => console.log(result.title));