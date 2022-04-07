// import {* as x} from 'pages/pets/pets-list.js'
const elems = {
    nav: document.querySelector("nav"),
    hamburger: document.querySelector(".hamburger"),
    content:document.querySelector('.pets .content-wrapper')
}
import { pets } from './pets-list.js';
console.log(pets)
console.log(pets.map(i => console.log(i.img)))
pets.forEach(pet => elems.content.insertAdjacentHTML('beforeend',getCard(pet)))
elems.content.insertAdjacentHTML('beforeend',getCard(pets[1]))

function getCard(obj) {
    return `
    <div class="card">
        <div class="image"><img src="${obj.img}" alt=""></div>
        <p class="pets-card-title">${obj.name}</p>
        <button class="button-primary">Learn more</button>
    </div>
 `
}





console.log(window.innerWidth)

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