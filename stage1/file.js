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

function getParticipants(handshakes) {
    console.log(handshakes)
    if (handshakes === 3) return handshakes
    if (handshakes > 1) return Math.ceil(Math.sqrt(handshakes * 2))
    return handshakes > 3 ? handshakes - 2 : handshakes + 1
}

function duplicateEncode(word) {
    let res = [];
    let i = 0;
    word.toLowerCase().split('').forEach((item) => {
        console.log(item)
        // console.log(array)
        word.toLowerCase().split('').forEach(item2 => {
            if (item === item2) { i++; }
        })
        if (i > 1) { res.push(')'); }
        if (i <= 1) { res.push('('); }
        i = 0;
    });
    return res.join('')
}

function duplicateEncode(word) {
    // let res = [];
    let i = 0;
    return word.toLowerCase().split('').reduce((res, item) => {
        word.toLowerCase().split('').forEach(item2 => {
            if (item === item2) { i++; }
        })
        if (i > 1) { res.push(')'); }
        if (i <= 1) { res.push('('); }
        i = 0;
        return res
    }, res = []);
}

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
// console.time()
// fib(40)
// console.timeEnd()

function fib(n) {
    if (n < 2) return n;
    return fib(n - 1) + fib(n - 2);
}

function nthFibo(n) {
    let arr = []
    let res = []
    for (let i = 0; i < 37; i++) {
        arr.push(i)
    }
    arr.forEach(i => res.push(fib(i)))

    // if (n === 1) return 0
    // if (n === 2) return 1
    // if (n === 3) return 1
    // if (n === 4) return 2
    // if (n === 5) return 3
    return res[n - 1]
}

function solution(number) {

    let arr = []
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) { arr.push(i) }

    }
    return arr.reduce((res, item) => {
        return res += item
    }, 0)

}

// 10 - 23
// 20 - 78
// 200 - 9168

function head(arr) {
    return arr[0]
}
function tail(arr) {
    arr.splice(1)
    return arr
}
function init(arr) {
    arr.pop()
    return arr
}
function last(arr) {
    return arr[arr.length - 1]
}
// [1, 2, [3, 4, [5]]]
// let res = 0;
// let err = 0;
// a = [[1, 1], [2, 2], [3, 3], [4, 4], [5, 5]]
// a = [1, 2, [3, 4, [5]]]
// a = ["x", "y", ["z"]]
// a = [1, 2, 3]
a = [[[[[[[[[]]]]]]]]]

function deepCount(x) {
    let res = 0
    deep(x)
    function deep(x) {
        // if (x.length && typeof (x) !== 'string') {
        if (Array.isArray(x)) {
            for (i of x) {
                res++
                deep(i)
            }
        }
    }
    return res
}
// console.log(deepCount(a))

function getLengthOfMissingArray(arrayOfArrays) {
    let lengthArrays = []
    if (arrayOfArrays === [] || arrayOfArrays === null) { return 0; }
    for (i of arrayOfArrays) {
        if (i === null) { return 0; }
        lengthArrays.push(i.length);
    }
    if (lengthArrays.includes(0)) {
        return 0;
    }
    lengthArrays.sort((a, b) => a - b)
    return lengthArrays.reduce((res, item, index, array) => {
        if (item + 1 !== array[index + 1] && item + 1 < array[array.length - 1]) {
            res = item + 1;
        }
        return res;
    }, 0)
}

const gloves = ["red", "green", "red", "blue", "blue", "red", "red", "red", "blue", "blue"]

function numberOfPairs(gloves) {
    let count = 0;
    res = {}
    gloveColors = new Set(gloves)
    gloveColors.forEach(color => { res[color] = 0 }) // init object
    gloveColors.forEach(color => { // count colors
        gloves.forEach(glove => {
            if (color === glove) {
                res[color] += 1
            }
        })
    })
    for (let color in res) {
        count += Math.floor(res[color] / 2)
    }
    return count
}
let test = [3, 8, 3, 6, 5, 7, 9, 1]
// test = [9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]

function sortByBit(arr) {
    return arr
        // .sort((a, b) => a - b)
        .sort((a, b) => {
            return count1Bits(a) === count1Bits(b) ? a - b : count1Bits(a) - count1Bits(b)
        })
}

function count1Bits(item) {
    return Number(item)
        .toString(2)
        .split('')
        .reduce((res, i) => i === '1' ? res += 1 : res, 0)
}



function calculate(...arguments) {

    let sum = 0;
    for (let arg of arguments)
        sum += arg;

    return function (...arguments) {
        for (let arg of arguments)
            sum += arg;

        return sum;
    }
}
// console.log(calculate(1)(5))

function launchAll() {
    for (var i = 0; i < 5; i++) {
        function name(i) {
            setTimeout(function () {
                console.log(i)
            }, i * 1000);
        }
        name(i)
    }
}

function createFunctions(n) {
    var callbacks = [];

    for (let i = 0; i < n; i++) {
        callbacks.push(function () {
            return i;
        });
    }

    return callbacks;
}


// let temp = createFunctions(5)
// temp[0]()
// temp[1]()
// temp[2]()

function createSecretHolder(secret) {
    return {
        s: secret,
        getSecret: function () {
            return this.s;
        },
        setSecret: function (a) {
            this.s = a;
        },
    }
}





function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
    if (enteredCode !== correctCode) {
        return false;
    }

    return new Date(currentDate) <= new Date(expirationDate)

}


// let dateRegexp = /(?<month>\w+)\s(?<day>\d{1,2}),\s(?<year>\d{4})/;
// let dateStr = "July 9, 2015";

// let groups = dateStr.match(dateRegexp).groups;

//  console.log(groups.day)


function getDate(year) {
    let res = 0;
    for (let month = 0; month <= 12; month++) {
        for (let day = 1; day <= 31; day++) {
            let tmp = new Date(`${month}-${day}-${year}`)
            if (tmp.getDay() === 5 && tmp.getDate() === 13) {
                res += 1;
            }
        }
    }
    return res
}
// function sec() {
//     this.name = seconds

// }

function formatDuration(seconds) {
    if (!seconds) { return 'now' }
    const second = Math.floor(seconds % 60)
    const min = Math.floor((seconds / 60) % 60)
    const hour = Math.floor((seconds / 3600) % 24)
    const day = Math.floor((seconds / 86400) % 365)
    const year = Math.floor(seconds / 31536000)
    let times = [year, day, hour, min, second]
    const timesName = ['year', 'day', 'hour', 'minute', 'second']

    times = times
        .map((itemTime, index) => {
            return itemTime = itemTime === 1 ? itemTime + ` ${timesName[index]}` : itemTime > 1 ? itemTime + ` ${timesName[index]}s` : '';
        })
        .reduce((res, itemTime, index, array) => {
            if (itemTime !== '') { res.push(itemTime) }
            return res
        }, [])

    times.forEach((itemTime, index, array) => {
        if (array.length - index == 1 && index !== 0) { times.splice((index), 0, 'and') }
    })
    return times.join(', ').replace(/, and,/g, ' and')
}
// year = year === 1 ? year + ' year, ' : year > 1 ? year + ' years,' : ''
// day = day === 1 ? day + ' day, ' : day > 1 ? ' ' + day + ' days,' : ''
// hour = hour === 1 ? hour + ' hour, ' : hour > 1 ? ' ' + hour + ' hours,' : ''
// min = min === 1 ? min + ' minute ' : min > 1 ? min + ' minutes ' : ''
// sec = sec === 1 ? and + sec + ' second' : sec > 1 ? and + sec + ' seconds' : ''

console.log(formatDuration(2))
console.log(formatDuration(22))
console.log(formatDuration(222))
// console.log('===')
console.log(formatDuration(1))
console.log(formatDuration(62))
console.log(formatDuration(120))
console.log(formatDuration(3600))
console.log(formatDuration(355556222))

// console.log(formatDuration(1))

var runLengthEncoding1 = function (str) {
    if (!str) { return [] }
    let res = [];
    str.split('').forEach((letter, index, array) => {
        res.push(letter)
        if (letter !== array[index + 1] && index !== array.length - 1) {
            res.push('.')
        }
    })
    return res.join('').split('.').map((item) => {
        return [item.length, item[0]]
    })
}

// console.log(runLengthEncoding1('aaabcaacccccc'))

// ("aaabcaa"), [[3,'a'],[1,'b'],[1,'c'],[2,'a']]
// str.split().map( letter,index, array =>{

// }  )

var runLengthEncoding = function (str) {
    console.log(str)
    return (str.match(/(.)\1*/g) || []).map(group => {

        return [group.length, group[0]]
    })
}

// console.log(runLengthEncoding("hello world!"))


// const input = [
//     { "type": "rotten apples", "material": "organic" },
//     { "type": "out of date yogurt", "material": "organic", "secondMaterial": "plastic" },
//     { "type": "wine bottle", "material": "glass", "secondMaterial": "paper" },
//     { "type": "amazon box", "material": "paper" },
//     { "type": "beer bottle", "material": "glass", "secondMaterial": "paper" },
//     { "type": "rotten apples", "material": "organic" },

// ]
// ===============  ===============
const materialss = ['paper', 'glass', 'organic', 'plastic']

function GenerateTest() {
    this.type = '' + randNum(1000, 5000);
    this.material = materialss[randNum(0, 3)];
    this.secondMaterial = materialss[randNum(0, 3)];
}

// const input = []
// for(let i = 0 ; i < 5000000; i++){
//     input[i] = new GenerateTest()
// }


// console.log(input)
// function randNum(min, max) { // random number from min to max
//     let rand = min + Math.random() * (max + 1 - min);
//     return Math.floor(rand);
// }


function recycle(input) {
    let res = [[], [], [], []]
    const materials = ['paper', 'glass', 'organic', 'plastic']
    materials.forEach((material, index) => {
        input.forEach(item => {
            if (item.material === material) {
                res[index].push(item.type)
            }
            if (item.secondMaterial === material) {
                res[index].push(item.type)
            }
        })
    })
    return res
}

// function kolya(input) {
//     let res = { paper: [], glass: [], organic: [], plastic: [] }


//     input.forEach((inputItem) => {

//         res[inputItem.material].push(inputItem.type)

//         if (inputItem.secondMaterial) {
//             res[inputItem.secondMaterial].push(inputItem.type)
//         }
//     })
//     return Object.values(res)
// }
