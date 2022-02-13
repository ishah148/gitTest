const requestURL1 = 'https://api.icndb.com/jokes/random'
const requestURL2 = 'https://jsonplaceholder.typicode.com/photos'
const requestURL3 = 'https://api.unsplash.com/search/photos?query=spring&client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'
const requestTest = 'https://api.unsplash.com/photos/?client_id=SouHY7Uul-OxoMl3LL3c0NkxUtjIrKwf3tsGk1JaiVo'

filmContent = (`        <div class="table">
<img src="" alt="img" class="testimg">
<div class="description-wrapper">
    <p class="title"></p>
    <p class="rating"></p>
</div>
</div>`)

let numberOfPage = 1;
const requestUrlPopularPage = `https://api.themoviedb.org/3/movie/popular?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&page=`
const requestSearch = (searchByName) =>'https://api.themoviedb.org/3/search/movie?api_key=f5978d3a7a7427ea73c7d60edf76ed30&language=en-US&query='+searchByName+'&page=1&include_adult=false';

const content =  document.querySelector('.table')
const imgLink = 'https://www.themoviedb.org/t/p/w220_and_h330_face'
let a;
let b;

// getFilmResult(requestUrlPopularPage)


function getFilmResult(url) {
    // pull data from API
    async function getFilm(url){
        try {
            console.log('get1')
            const response = await fetch(url)
            const data = await response.json()
            // return Promise.resolve(data)
            // console.log(data)
            return data
        } catch(err){
        console.log(err)
    }
    }
    // add html wrapper
    getFilm(url).then( data => {
        console.log('get2')
        for(i in data.results){
            document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', filmContent)

        }
    })
    // add content wrapper
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
//   content.addEventListener('click', showAdditionalData)
  content.addEventListener('click', () =>{
      console.log('click')
  })
  
//   function showAdditionalData(){
//    content.style.display = 'none'
//   }