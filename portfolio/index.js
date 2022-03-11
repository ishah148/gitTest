const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const back = document.querySelector('.background_nav_ul');
const button = document.querySelector('.button-autumn');
function toggleMenu() {
    burger.classList.toggle('is-active');
    nav.classList.toggle('is-active');
    back.classList.toggle('is-active');
}
burger.addEventListener('click', toggleMenu);
nav.addEventListener('click', toggleMenu);
back.addEventListener('click', toggleMenu);

// =============== BUTTONS ===============
const portfolioBtn = document.querySelector('.button-winter');
// Searching buttons
const portfolioBtn1 = document.querySelector('.button-winter');
const portfolioBtn2 = document.querySelector('.button-spring');
const portfolioBtn3 = document.querySelector('.button-summer');
const portfolioBtn4 = document.querySelector('.button-autumn');

const portfolioBtns = document.querySelectorAll('div.portfolio-buttons > button');
const portfolioImages = document.querySelectorAll('div.portfolio-photo > div > img');

const portfolioBtnArr = [portfolioBtn1, portfolioBtn2, portfolioBtn3, portfolioBtn4]
const season = ['winter', 'spring', 'summer', 'autumn']

for (let i = 0; i < portfolioBtnArr.length; i++) {
    portfolioBtnArr[i].addEventListener('click', () => {
        portfolioImages.forEach((img, index) => img.src = `./assets/img/` + season[i] + `/${index + 1}.jpg`)
        for (let i = 0; i < portfolioBtnArr.length; i++) {
            portfolioBtnArr[i].classList.remove('is-active'); // Check push puttun
        }
        portfolioBtnArr[i].classList.toggle('is-active');
    });
}

// =============== Light/Night Theme ===============
document.querySelector(".price-table-wrapper > div:nth-child(3)")
document.querySelector(".price-table-wrapper > div:nth-child(2)")
document.querySelector(".price-table-wrapper > div:nth-child(1)")

const ligthArr = ['html', 'main', '.skills', '.portfolio',
 '.portfolio-photo', '.video', '.price', '.contacts', 'footer',
 '.button-winter','.button-spring','.button-summer','.button-autumn',
'.contacts-div-contact_me',
'.line-before:before,.line','.line','footer','.price-table-wrapper > div:nth-child(1)'
,'.price-table-wrapper > div:nth-child(2)','.price-table-wrapper > div:nth-child(3)','.background_hero_description'
]
// document.documentElement.style.setProperty('--background-color-line','#fff')
// const lightArrTheme = ligthArr.map(( (item) => item.querySelector(`${item}`)))
const docQuerries = [];
// const Light;
// console.log('lightArrTheme', lightArrTheme)
for (let i = 0; i < ligthArr.length; i++) {
    docQuerries[i] = document.querySelector(`${ligthArr[i]}`)
}

console.log('docQuerries === ', docQuerries)
buttonTheme = document.querySelector('.theme-wrapper');
console.log('buttonTheme', buttonTheme)

function turnOfTheme() {
    document.querySelector('.theme-wrapper').classList.toggle('is-light')
    for (let i = 0; i < ligthArr.length; i++) {
        docQuerries[i].classList.toggle('is-light')
    }

    document.querySelectorAll('h3').forEach( (item,index) => item.classList.toggle('is-light') )
    document.querySelectorAll('p').forEach( (item,index) => item.classList.toggle('is-light') )
    document.querySelectorAll('.line').forEach( (item,index) => item.classList.toggle('is-light') )
    // document.querySelectorAll('main *').forEach( (item,index) => item.classList.toggle('is-light') )
    document.documentElement.style.setProperty('--background-color-line','#000')
}


buttonTheme.addEventListener('click', turnOfTheme)
