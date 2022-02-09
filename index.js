const requestURL1 = 'https://api.icndb.com/jokes/random'
const requestURL2 = 'https://jsonplaceholder.typicode.com/photos'
console.log('step 1');
let a;
function getData(url) {

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        // console.log(data);
        console.log('----------')
        a =  data.filter( (item,index) => index <9)
        for(i in a){
            console.log(i)
            console.log(a[i].url)
            document.querySelectorAll('.wrapper img')[i].src = a[i].url

        }
        // document.querySelector('.testimg').src = data[20].url
        // console.log('a ===',a)
    });
}
console.log('step 2');
// getData(requestURL1);
console.log('step 3');
getData(requestURL2);
console.log('step 4');
// function sendRequest(method, url, body = null) {
//   const headers = {
//     'Content-Type': 'application/json'
//   }

//   return fetch(url, {
//     method: method,
//     body: JSON.stringify(body),
//     headers: headers
//   }).then(response => {
//     if (response.ok) {
//       return response.json()
//     }

//     return response.json().then(error => {
//       const e = new Error('Что-то пошло не так')
//       e.data = error
//       throw e
//     })
//   })
// }

// sendRequest('GET', requestURL)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))

// const body = {
//   name: 'Vladilen',
//   age: 26
// }
// console.log(body)
// sendRequest('POST', requestURL, body)
//   .then(data => console.log(data))
//   .catch(err => console.log(err))