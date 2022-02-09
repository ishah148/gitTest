const requestURL1 = 'https://api.icndb.com/jokes/random'
const requestURL2 = 'https://jsonplaceholder.typicode.com/photos'
const requestURL3 = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
console.log('step 1');
let a;
let b;
function getData(url) {

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            console.log('----------')
            a = data.filter((item, index) => index < 9)
            for (i in a) {
                console.log(i)
                console.log(a[i].url)
                document.querySelectorAll('.wrapper img')[i].src = a[i].url
                document.querySelectorAll('.wrapper img')[i].alt = a[i].title
                
            }
        });
    }
function getData2(url) {
    
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            b = data
            // data.results[0].urls.small_s3
            for (i in data.results) {
                console.log('2--------2')
                console.log(i)
                console.log(data.results[i].urls.small_s3)
                document.querySelectorAll('.wrapper img')[i].src = data.results[i].urls.small_s3
                console.log(data)
                console.log('end2---------end2')
            }
        });
}

getData2(requestURL3)


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