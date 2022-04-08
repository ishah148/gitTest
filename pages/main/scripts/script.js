// import { pets } from './pets-list.js';
// import {* as x} from 'pages/pets/pets-list.js'
// window.onload
const elems = {
    nav: document.querySelector("nav"),
    hamburger: document.querySelector(".hamburger"),
    content: document.querySelector('.pets .content-wrapper'),
    buttonLeft: document.querySelector("button.button-arrow.left"),
    buttonRight: document.querySelector("button.button-arrow.right"),
    contentAll: function () {
        return document.querySelectorAll('.pets .content-wrapper .card');
    },
}

let numberOfPage = 1

let petsString = pets.reduce((res, pet) => {
    res.push(getCard(pet))
    return res;
}, [])

// console.log(pets.map(i => console.log(i.img)))
// pets.forEach(pet => elems.content.insertAdjacentHTML('beforeend', getCard(pet)))
console.log(petsString)

showCards()


function showCards() {
    pets.
        slice(numberOfPage - 1, numberOfPage - 1 + getMediaType()).
        forEach(pet => elems.content.insertAdjacentHTML('beforeend', getCard(pet)))
}
// debugger

function getMediaType() {
    const width = window.innerWidth
    // console.log(width)
    if (width > 1280) { return 3 }
    if (width < 1280 && width > 768) { return 2 }
    if (width < 768) { return 1 }
}

function removeCards() {
    // debugger
    elems.contentAll().forEach(i => i.remove())
    
}

window.addEventListener('resize', () => {
    // console.log(this.innerWidth)
})

elems.hamburger.addEventListener('click', function () {
    this.classList.toggle('active')
    elems.nav.classList.toggle('active')
})

document.querySelectorAll('nav p').forEach(block => {
    block.addEventListener('click', function () {
        if (window.innerWidth < 660) {
            elems.nav.classList.toggle('active')
            elems.hamburger.classList.toggle('active')
        }
    })
})

document.addEventListener('keydown', logKey);

function logKey(event) {
    // console.log(event.keyCode);
    if (event.keyCode === 37) {
        removeCards()
        numberOfPage > 1 ? numberOfPage -= 1 : numberOfPage = 1;
        showCards()
    }
    if (event.keyCode === 39) {
        // removeCards()
        numberOfPage += 1;
        showCards()

    }
    console.log(numberOfPage)
}

elems.buttonLeft.onclick = function minusPage() {
    removeCards()
    numberOfPage > 1 ? numberOfPage -= 1 : numberOfPage = 1;
    showCards()
}
elems.buttonRight.onclick = function plusPage() {
    let max = Math.ceil(pets.length / getMediaType());
    console.log('max')
    console.log(max)
    removeCards()
    numberOfPage > max ? max : numberOfPage += 1;
    if(numberOfPage ===  max){
        elems.buttonRight.classList.toggle('invalid')
        console.log(elems.buttonRight)
    }
    showCards()
}


setInterval(() => {
    // console.log(numberOfPage)
}, 600);


function getCard(obj) {
    return `
    <div class="card">
        <div class="image"><img src="${obj.img}" alt=""></div>
        <p class="pets-card-title">${obj.name}</p>
        <button class="button-primary">Learn more</button>
    </div>
 `
}

function updateCardResize(){

}