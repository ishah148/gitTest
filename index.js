const requestURL1 = 'https://api.icndb.com/jokes/random'
const requestURL2 = 'https://jsonplaceholder.typicode.com/photos'
const requestURL3 = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
//&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo
const requestTest = 'https://api.unsplash.com/photos/?client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
// const requestURL3 = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
//b485f3e1
// http://www.omdbapi.com/?s=green&y=&plot=&apikey=b485f3e1 searth with name: green, year:empty, plit:none, apikey:b485f3e1
//http://www.omdbapi.com/?t=terminator%202&y=&plot=full&apikey=b485f3e1

// =============== api tmdb ===============
// =============== some examples===============
//api tmdb
// f5978d3a7a7427ea73c7d60edf76ed30
//https://api.themoviedb.org/3/movie/550?api_key=f5978d3a7a7427ea73c7d60edf76ed30
//https://api.themoviedb.org/3/search/movie?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&query=1984&page=1&include_adult=false
//search 1984 by name
// Path to photo is link + ID of film
// =============== popular ===============
// https://api.themoviedb.org/3/movie/popular?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&page=1
// =============== img link ===============
// https://www.themoviedb.org/t/p/w220_and_h330_face/
// ===============    end      ===============

//cd3f65717cbbf12fee2f4b6eac20629e apikey kinopoisk

temp = '<div class="table"><img src="" alt="img" class="testimg"><div class="description-wrapper"><p class="title"></p><p class="year"></p><svg class="rating-svg"><use xlink:href="assets/svg/rating.svg#rating"></use></svg><p class="rating"></p></div></div>'

const requestUrlPopular = 'https://api.themoviedb.org/3/movie/popular?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&page=1'
const requestSearch = (searchByName) =>'https://api.themoviedb.org/3/search/movie?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&query='+searchByName+'&page=1&include_adult=false';
// function requestSearch
const imgLink = 'https://www.themoviedb.org/t/p/w220_and_h330_face'






console.log('step 1');
let a;
let b;
// getData(requestUrlPopular)

function getData(url) {

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            // console.log(data);
            console.log('----------')
            // a = data.filter((item, index) => index < 9)
            a = data
            console.log(data)
            for (i in data.results) {
                if(i > document.querySelectorAll('.wrapper img').length - 1) return
                console.log(i)
                console.log(data.results[i].id)
                document.querySelectorAll('.wrapper img')[i].src = imgLink + data.results[i].poster_path
                document.querySelectorAll('.wrapper img')[i].alt = data.results[i].title
            }
        })
        .catch( i => console.log('errror',i))
    }


getFilm(requestUrlPopular)

async function getFilm(url){
    try {
    const response = await fetch(url)
    const data = await response.json()
    // return Promise.resolve(data)
    return data
    } catch(err){
    console.log(err)
}
}
getFilm(requestUrlPopular).then( data => {
    for (i in data.results) {
        if(i > document.querySelectorAll('.wrapper img').length - 1) return
        document.querySelectorAll('.wrapper img')[i].src = imgLink + data.results[i].poster_path
        document.querySelectorAll('.wrapper img')[i].alt = data.results[i].title
        document.querySelectorAll('.table .title')[i].innerHTML = data.results[i].title + '<div class = "hello">'
    }
})
// getFilm.then( data => console.log(data))






    // =============== get photos flowers ===============
    // function getData2(url) {
        
        //     fetch(url)
        //         .then((res) => res.json())
        //         .then((data) => {
//             b = data
//             // data.results[0].urls.small_s3
//             for (i in data.results) {
    //                 console.log('2--------2')
    //                 console.log(i)
    //                 console.log(data.results[i].urls.small_s3)
    //                 document.querySelectorAll('.wrapper img')[i].src = data.results[i].urls.small_s3
    //                 // console.log(data)
    //                 console.log('end2---------end2')
    //             }
    //         })
    //         .catch( i => console.log('i ====',i))
    //     }
    // =============== end get photos flowers ===============
    
    
    
    // =============== ===============
    // getData2(requestURL3)
    // function getTest(url) {
        //     console.log('enter')
        //     fetch(url)
        //     .then((res) => res.json())
        //     .then((data) => {
    //         b = data
    //         console.log(data)
    //     })
    //     // .catch( i => console.log('i ====',i))
    // }
        

    // getTest(requestTest)


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