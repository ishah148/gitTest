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

const gloves = ["red", "green", "red", "blue", "blue"]
res = {

}
temp = new Set(gloves)
console.log(temp)
temp.forEach(color => {res[color] = 0})
temp.forEach(color => {
    gloves.forEach(glove => {
        if(color === glove){
            res[color] +=1
        }
        

    })
})
function numberOfPairs(gloves) {

}
