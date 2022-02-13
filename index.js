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

// temp = '<div class="table"><img src="" alt="img" class="testimg"><div class="description-wrapper"><p class="title"></p><p class="year"></p><svg class="rating-svg"><use xlink:href="assets/svg/rating.svg#rating"></use></svg><p class="rating"></p></div></div>'
temp = (`        <div class="table">
<img src="" alt="img" class="testimg">
<div class="description-wrapper">
    <p class="title"></p>
    <p class="year"></p>
    <p class="rating"></p>
</div>
</div>`)
let numberOfPage = 1;
const requestUrlPopular =     'https://api.themoviedb.org/3/movie/popular?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&page=1'
const requestUrlPopularPage = `https://api.themoviedb.org/3/movie/popular?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&page=`
const requestSearch = (searchByName) =>'https://api.themoviedb.org/3/search/movie?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&query='+searchByName+'&page=1&include_adult=false';
// function requestSearch
const imgLink = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
let a;
let b;
// getData(requestUrlPopular)
getFilmResult(requestUrlPopular)
// getFilmResult(requestUrlPopularPage)

function getFilmResult(url) {
    // getFilm(requestUrlPopular)
    // getFilm(requestUrlPopular2)
    // let dataFilm
    async function getFilm(url){
        try {
            console.log('get1')
            const response = await fetch(url)
            const data = await response.json()
            // return Promise.resolve(data)
            console.log(data)
            return data
        } catch(err){
        console.log(err)
    }
    }

    getFilm(url).then( data => {
        console.log('get2')

        // console.log(data.results.length)
        for(i in data.results){
            // if(i > data.results.length - 1) return
            document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', temp)

        }
    })

    getFilm(url).then( data => {
        console.log('get3')
        
        for (i in data.results) {
            if(i > document.querySelectorAll('.wrapper img').length - 1) return
            document.querySelectorAll('.wrapper img')[i].src = imgLink + data.results[i].poster_path
            document.querySelectorAll('.wrapper img')[i].alt = data.results[i].title
            document.querySelectorAll('.table .title')[i].innerHTML = data.results[i].title
            document.querySelectorAll('.table .rating')[i].innerHTML = data.results[i].vote_average
        }
    })
// getFilm.then( data => console.log(data))

}

function removeFilms() {
    document.querySelectorAll('.wrapper *').forEach( i => i.remove())
}
function plusPage(){
    numberOfPage += 1
    removeFilms()
    document.querySelector('nav .current p').innerHTML = numberOfPage
    getFilmResult(requestUrlPopularPage + numberOfPage)
}
function minusPage(){
    numberOfPage -= 1
    if(numberOfPage === 0) {
        numberOfPage = 1;
        return
    }
    removeFilms()
    document.querySelector('nav .current p').innerHTML = numberOfPage
    getFilmResult(`${requestUrlPopularPage}${numberOfPage}`)
}
// function search(){
    
// }


let form = document.getElementById('search-form');
form.onsubmit = function() {
    let value = form.text.value;
    if (value == '') return false; // игнорируем отправку пустой формы
    removeFilms()
    getFilmResult(requestSearch(value))
    console.log(value)
    // complete(value);
    return false;
  };