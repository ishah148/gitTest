// import {* as x} from 'pages/pets/pets-list.js'
import {pets} from './pets-list.js';

console.log(...pets.map(i => console.log(i.name)))


const elems = {
    nav : document.querySelector("nav"),
    hamburger : document.querySelector(".hamburger"),
}

console.log(window.innerWidth)

window.addEventListener('resize',()=>{
    // console.log(this.innerWidth)
})

elems.hamburger.addEventListener('click',function (){
    this.classList.toggle('active')
    elems.nav.classList.toggle('active')
})

document.querySelectorAll('nav p').forEach(block =>{
    block.addEventListener('click',function(){
    if(window.innerWidth < 660){
        elems.nav.classList.toggle('active')
        elems.hamburger.classList.toggle('active')
    }
    })
})