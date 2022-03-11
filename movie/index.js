//flags
let numberOfPage = 1;
let searchValue;
let isSearch = false;


const requestURL1 = 'https://api.icndb.com/jokes/random'
const requestURL2 = 'https://jsonplaceholder.typicode.com/photos'
const requestURL3 = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
const requestTest = 'https://api.unsplash.com/photos/?client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
const requestUrlPopularPage = `https://api.themoviedb.org/3/movie/popular?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&page=`;
const requestSearch = (searchByName) => 'https://api.themoviedb.org/3/search/movie?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&query=' + searchByName + '&page=1&include_adult=false';
const requestSearch2 = (searchByName, numberOfPage) => 'https://api.themoviedb.org/3/search/movie?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&query=' + searchByName + '&page=' + numberOfPage + '&include_adult=false';

const content = document.querySelector('.table');
const imgLink = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
const nullPicture = 'assets/png/nullPic.png'

const filmContent = (`        
<div class="table">
<img src="" alt="img" class="testimg">
    <div class="description-wrapper">
        <p class="title"></p>
        <p class="rating"></p>
    </div>
    <div class="additional-data">
        <p class="description"></p>
        <p class="year"></p>
    </div>
</div>`
)


getFilmResult(requestUrlPopularPage);

document.querySelector("body > header > h1").addEventListener('click', () => {
    isSearch = false;
    removeFilms();
    getFilmResult(requestUrlPopularPage);

})

function getFilmResult(url) {
    // pull data from API
    getFilm(url)
    async function getFilm(url) {
        const response = await fetch(url)
        const data = await response.json()
        // return Promise.resolve(data)
        console.log(data)
        createPageTables(data)
        showContent(data)
    }

}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }



function createPageTables(data) {
    sleep(5000)
    console.log('enter to CPT')
    for (i in data.results) {
        document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', filmContent)
    }
}
//     // // add content wrapper
function showContent(data) {
    console.log('enter to show')
    for (i in data.results) {
        if (i > document.querySelectorAll('.wrapper img').length - 1) return
        document.querySelectorAll('.table')[i].addEventListener('click', showDescription)
        document.querySelectorAll('.wrapper img')[i].src = imgLink + data.results[i].poster_path
        document.querySelectorAll('.wrapper img')[i].alt = data.results[i].title
        document.querySelectorAll('.table .title')[i].innerHTML = data.results[i].title
        document.querySelectorAll('.table .rating')[i].innerHTML = data.results[i].vote_average
        document.querySelectorAll('.table .additional-data .description')[i].innerHTML = data.results[i].overview
        document.querySelectorAll('.table .additional-data .year')[i].innerHTML = data.results[i].release_date
        if (data.results[i].poster_path === null) { document.querySelectorAll('.wrapper img')[i].src = nullPicture }
    }
}

function showDescription() {
    this.children[2].classList.toggle('click')
}

function removeFilms() {
    document.querySelectorAll('.wrapper *').forEach(i => i.remove())
}
function plusPage() {
    if (document.querySelectorAll('.wrapper .table').length < 20) return
    numberOfPage += 1
    removeFilms()
    document.querySelector('nav .current p').innerHTML = numberOfPage
    isSearch === false ? getFilmResult(requestUrlPopularPage + numberOfPage) : getFilmResult(requestSearch2(searchValue, numberOfPage))

}
function minusPage() {
    numberOfPage -= 1
    if (numberOfPage === 0) {
        numberOfPage = 1;
        return
    }
    removeFilms()
    document.querySelector('nav .current p').innerHTML = numberOfPage
    isSearch === false ? getFilmResult(requestUrlPopularPage + numberOfPage) : getFilmResult(requestSearch2(searchValue, numberOfPage))

}

function getSearchRequest() {

}

let form = document.getElementById('search-form');
form.onsubmit = function () {
    let value = form.text.value;
    searchValue = value;
    numberOfPage = 1;
    isSearch = true;
    if (value == '') return false; // игнорируем отправку пустой формы
    removeFilms()
    getFilmResult(requestSearch(value))
    return false;
};
