let a = "1 2 3 4 5"

a = "1 2 -3 4 5"
function highAndLow(numbers) {
    let temp = numbers.split(' ')
        .map(item => +item)
        .sort((a, b) => b - a)

    return `${temp[0]} ${temp[temp.length - 1]}`;
}

// highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')
a = "This website is for losers LOL!"
function disemvowel(str) {
    listSogl = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
    let temp = str.split('').map(item => listSogl.includes(item) ? '' : item)
    return temp.join('')
}
// console.log(disemvowel(a))

function isIsogram(str) {
    temp = new Set(str.toUpperCase().split(''))
    return temp.size === str.split('').length
}

// console.log(isIsogram("Dermatoglyphics"))
// console.log(isIsogram("aba"))

function explode(s) {
    return s.split('')
        .map(item => item.repeat(+item))
        .join('')
        + ''
}

// console.log(explode("312"))
// console.log(explode("333122"))
// explode('1488')

function getParticipants(handshakes){
    console.log(handshakes)
    if(handshakes === 3) return handshakes
    if(handshakes > 1) return Math.ceil(Math.sqrt(handshakes*2))
    return handshakes > 3?handshakes - 2:handshakes + 1
  }