const description = document.querySelectorAll('.project')
// description.addEventListener('click',()=>{
//     document.querySelectorAll('.description-project')[0].classList.toggle('push')
// }
// )
description.forEach( (item,index) => item.addEventListener('click',()=>{
    item.firstElementChild.classList.toggle('push')
}))