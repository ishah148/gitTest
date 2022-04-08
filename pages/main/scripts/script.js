// import { pets } from './pets-list.js';
// import {* as x} from 'pages/pets/pets-list.js'
// window.onload
let numberOfPage = 1

const elems = {
    nav: document.querySelector("nav"),
    hamburger: document.querySelector(".hamburger"),
    content: document.querySelector('.pets .content-wrapper'),
    buttonLeft: document.querySelector("button.button-arrow.left"),
    buttonRight: document.querySelector("button.button-arrow.right"),
    contentAll: function () {
        return document.querySelectorAll('.pets .content-wrapper .card');
    },
    getCountCard: function () {
        return document.querySelectorAll('.card').length
    },
}


showCards()

function showCards() {
    let min = (numberOfPage - 1) * getMediaType();
    let max = ((numberOfPage - 1) * getMediaType()) + getMediaType();
    pets
        .slice(min, max)
        .forEach(pet => elems.content.insertAdjacentHTML('afterbegin', getCard(pet)))
}


function getMediaType() {
    const width = window.innerWidth
    // console.log(width)
    if (width > 1000) { return 3 }
    if (width < 1000 && width > 750) { return 2 }
    if (width < 750) { return 1 }
}

function removeCards() {
    // debugger
    elems.contentAll().forEach(i => i.remove())

}

window.addEventListener('resize', () => {
    updateCardResize()
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



elems.buttonLeft.onclick = function minusPage() {
    let min = 1
    removeCards()
    numberOfPage > min ? numberOfPage -= 1 : min;
    checkStyle()
    showCards()
}
elems.buttonRight.onclick = function plusPage() {
    let max = Math.ceil(pets.length / getMediaType());
    console.log('=>', max)
    removeCards()
    numberOfPage >= max ? max : numberOfPage += 1;
    checkStyle()
    showCards()
}


function checkStyle() {
    let max = Math.ceil(pets.length / getMediaType());
    if (numberOfPage === max) {
        elems.buttonRight.classList.add('invalid');
        return;
    }
    if (numberOfPage === 1) {
        elems.buttonLeft.classList.add('invalid');
        return;
    }
    if (numberOfPage > 1 || numberOfPage < max) {
        elems.buttonLeft.classList.remove('invalid');
        elems.buttonRight.classList.remove('invalid');
        return;
    }
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

function updateCardResize() {
    if (elems.getCountCard !== getMediaType()) {
        numberOfPage = Math.floor(numberOfPage / getMediaType()) || 1;
        removeCards()
        showCards()
    }
}