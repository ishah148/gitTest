console.log(window.innerWidth)
window.addEventListener('resize',()=>{
    console.log(this.innerWidth)
})
const elems = {
    nav : document.querySelector("nav"),
    hamburger : document.querySelector(".hamburger"),
}
elems.hamburger.addEventListener('click',function (){
    this.classList.toggle('active')
    console.log(this)
    elems.nav.classList.toggle('active')
})
