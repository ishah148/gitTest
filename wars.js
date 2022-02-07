function get(num, str, obj) {
  return str;
}
/*
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
*/
var ArrowFunc = function (arr) {
  return arr.map(x => String.fromCharCode(x)).join(''); //Complete this function
}

function mergeArrays(arr1, arr2) {

  let arr3 = arr1.concat(arr2).sort((a, b) => a - b);

  let result = new Set(arr3);

  return Array.from(result);

}

function colourAssociation(array) {
  let res = [];

  res = array.map(function (item) {
    let obj = {};
    obj.item[0] = item[1];
    return obj;
  });
  return res;
}


//  console.log(colourAssociation([["white", "goodness"],["blue", "tranquility"]]));

function add(num1, num2) {
  num1 = Array.from(num1.toString());
  num2 = Array.from(num2.toString());
  let result = [];
  if (num1.length > num2.length) {
    for (let i = num2.length; i < num1.length; i++) {
      num2.unshift(0);
    }
  }
  if (num2.length > num1.length) {
    for (let i = num1.length; i < num2.length; i++) {
      num1.unshift(0);
    }
  }

  for (let i = 0; i < num1.length; i++) {
    result[i] = +num1[i] + (+num2[i]);
  }
  console.log(result.join(''));
  return +result.join('');
}

// let func = function(array) {
//   return Object.fromEntries(array);
// }

// // prices = { banana: 1, orange: 2, meat: 4 }

// console.log(func([
//   ["white", "goodness"],
//    ["blue", "tranquility"],
//   ]));

function colourAssociation(array) {
  return array.map(function (item) {
    return Object.fromEntries([item]);
  });
}

function combine() {
  // Your code here
}
let tmp;
console.log(123);
const A = { a: 10, b: 20, c: 30 }
const B = { a: 3, c: 6, d: 3, }
const C = { 'andry': '11', 'boil': '12', 'colya': '13' }
let a = [1, 2, 3, 4, 5]
// const b = [[6], [7], [8], [9]]
// a.push(b)
console.log(a)
// const Obj = {};
function MyConstuctor(name, value) {
  this.name = name;
  this.value = value;
}
function addValue(name, value) {
  return {
    name,
    value,
  };
}
let Obj = addValue('ivan', 547)
let Obj2 = { a: 22 }
let Obj3 = Object.assign(Obj, Obj2)
console.log('Obj = ', Obj)
console.log('Obj2 = ', Obj2)
console.log('Obj3 = ', Obj3)
new MyConstuctor('ivan', '45')
MyConstuctor('igor', 2232)
console.log('----------------------------')

// const arrayOfObjects = [
//   {
//     Name: "Apple", Type: "Fruit"
//   },
//   {
//     Name: "Carrot", Type: "Vegetable"
//   },
//   {
//     Name: "Carrot", Type: "Vegetable"
//   },
//   {
//     Name: "Carrot", Type: "Vegetable"
//   },
//   {
//     Name: "Apple",  Type: "Fruit"
//   },
//   {
//     Name: "Apple",  Type: "Fruit"
//   },
//   {
//     Name: "Carrot", Type: "Vegetable"
//   }
// ];


// const result = arrayOfObjects.reduce((a, {Name, Type}) => {
//   a[Name] = a[Name] || {Name, Type, times: 0};
//   a[Name].times += 1;
//   return a;
// }, {})

// console.log(Object.values(result));
// console.log('-------------------------------')


// const result = [...arrayOfObjects.reduce((r, o) => {

//   const key = o.Name + '-' + o.Type;

//   const item = r.get(key) || Object.assign({}, o, {
// times: 0
//   });

//   item.times += 1;

//   return r.set(key, item);
// }, new Map).values()];

// console.log(Object.values(result));

console.log('Object.keys(A) = ', Object.keys(A))
console.log([A, B])
let H = [A, B].reduce((prev, item) => {
  // console.log(Object.keys(item));
  // console.log(Object.values(item));
  // console.log('reduce ---',(Object.values(item).filter((item)=>item > 5)))
  return prev.concat((Object.values(item).filter((item) => item > 5)))
}
  , [])

// Object.values(A).map( (item)=> {
//   if(item > 19){
//     console.log('>5')
//   }
//   } )
console.log('test1-', [].concat([4, 5, 6]))

H = [A, B].reduce((prev, item) => {
  let keys = Object.keys(item);

  for (let key of keys) {

    if (prev[key])
      prev[key] += item[key];
    else
      prev[key] = item[key];
  }
  return prev;
}, {});

// console.log('H ko=ikya= ', H)

function nbDig(n, d) {
  let res = 0;
  let arr = [];
  for (let i = 0; i <= n; i++) {
    arr[i] = i ** 2;
  }
  let tmp = arr.toString();
  n = arr.toString().length;
  for (let i = 0; i < n; i++) {
    if (tmp[i] == d) {
      res++;
    }
  }
  return res
}
// console.log('nbD ===',nbDig(2000000, 1))

// function findMissing(arr1, arr2) {
//   arr2.sort( (a,b) => a-b)
//   arr1.sort( (a,b) => a-b)
//   for(let i = 0; i < arr1.length;i++){
//     if(arr1[i] !== arr2[i]){

//       // console.log(arr1[i])
//       return arr1[i]
//     }
//   }
// }
function findMissing(arr1, arr2) {
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  console.log(arr1.reduce(reducer, 0))
  console.log(arr2.reduce(reducer, 0))
  return arr1.reduce(reducer, 0) - arr2.reduce(reducer, 0);
}
delete b;
// console.log('find', findMissing([4, 3, 3, 61, 8, 8], [8, 61, 8, 3, 4]))
// a = [2, 9, 13, 10, 5, 2, 9, 5]
// let b = a.reduce((max, item, index, array) => {
//   let sliceReducer = array.slice(index, index + 3).reduce((res, i) => res + i)
//   if (sliceReducer > max) max = sliceReducer
//   console.log("sliceReducer === ", sliceReducer)
//   console.log(max, item, index, array)
//   return max
// }, a.slice(0, 3).reduce((a, b) => a + b))
// console.log(a)

// a = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue) {
//   return previousValue + currentValue;
// });
// console.log(a)

// let sliceReducer = a.slice(0, 3).reduce((res, item) => res + item)
// tmp = 0


function maxTriSum(numbers) {
  return Array.from(new Set(numbers)).sort((a, b) => a - b).slice(-3).reduce((a, b) => a + b);
}


for (let i = 0; i < a.length; i++) {
  // max = max.concat
}
function maxTriSum(numbers) {
  return numbers.reduce((max, item, index, array) => {
    let sliceReducer = array.slice(index, index + 3).reduce((res, i) => res + i)
    console.log("sliceReducer", index, " === ", sliceReducer)
    if (index > array.length - 2) return max
    console.log('2 :   ', max, item, index, array)
    if (sliceReducer > max) max = sliceReducer
    return max
  }, numbers.slice(0, 3).reduce((a, b) => a + b))
}
// console.log("maxTriSum(a) === ", maxTriSum([3,2,6,8,2,3]))
function myLanguages(obj) {
  let res = [];
  let val = Object.values(obj)
  let keys = Object.keys(obj).sort((a, b) => obj[b] - obj[a]) // !!!!!!!!!!!!!!! Сортировка
  for (i of keys) {
    if (obj[i] >= 60) res.push(i);

  }
  return res;
}
// console.log('melang',myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}))

//(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}), ["Ruby", "Python"])
//    (myLanguages({"Hindi" : 60, "Greek" : 71, "Dutch" : 93}), ["Dutch", "Greek", "Hindi"])
//    (myLanguages({"C++" : 50, "ASM" : 10, "Haskell" : 20}), [])
// let test2 = a.reduce( (prev, item) =>{
//   // prev.push(Object.values)    
//   console.log(Object.values(a))

// },[] )
// console.log('test2      = ',test2)

// for (i of keys) {
//   if (a[i] > 60) res.push(i);
//   return res;
// }
// console.log(res)


function nicknameGenerator(names) {
  listSogl = ["a", "e", "i", "o", "u"]
  if (names.length < 4) return "Error: Name too short"
  else if (listSogl.includes(names[2])) return names.slice(0, 4)
  else return names.slice(0, 3)

}
// console.log(nicknameGenerator("Jimmy"), "Jim");


function sortMyString(S) {
  b = Array.from(S)
  return b.reduce((res, item, index) => {
    if (index % 2 === 0) res += item;
    return res
  }, '') + ' ' +
    b.reduce((res, item, index) => {
      if (index % 2 === 1) res += item;
      return res
    }, '')
}



console.log('111111111', sortMyString("CodeWars"))
//, "CdWr oeas");
console.log('222222222', sortMyString("YCOLUE'VREER"))
//, "YOU'RE CLEVER");   

// a = "CodeWars";
// b = Array.from(a)
// c = 
// b.reduce((res, item, index) => {
//   if (index % 2 === 0) res += item;
//     return res
// }, '') 
// +' '+
// b.reduce((res, item, index) => {
//   if (index % 2 === 1) res += item;
//     return res
// }, '')
// console.log(c)

function isPowerOfTwo(n) {
  let res = []
  for (let i = 0; i < 30; i++) {
    res.push(2 ** i)
  }
  if (res.includes(n)) return true
  else return false
}
// isPowerOfTwo()

List = [
  { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
  { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
]
console.log(Object.keys(List))

let keys = Object.keys(List).sort((a, b) => List[b] - List[a])
res = ''
function sentence(List) {
  return List
    .sort((a, b) => {
      key1 = Object.keys(a);
      key2 = Object.keys(b);
      return key1[0] - key2[0]
    })
    .map(item => Object.values(item)[0]).join(' ')

}
console.log(sentence([
  { '4': 'dog' }, { '2': 'took' }, { '3': 'his' },
  { '-2': 'Vatsan' }, { '5': 'for' }, { '6': 'a' }, { '12': 'spin' }
])
)
// function sentence(List) {
//   return List.sort((item1, item2) => {
//     let key1 = +Object.keys(item1)[0];
//     let key2 = +Object.keys(item2)[0];
//     return key1 - key2;
//   }).reduce((res, item) => { return res + ' ' + Object.values(item)[0] }, '').trim()
// }


function vowelOne(s) {
  return Array.from(s).map((item) => {
    return 'aeiouAEIOU'.includes(item) ? 1 : 0;
  }).join('');
}

// console.log(vowelOne( "vowelOne" ))



function killer(suspectInfo, dead) {
  let bingo = 0;
  for (suspect in suspectInfo) {
    //let values = Object.values(suspect);
    console.log("suspect", suspect)
    for (let man of suspectInfo[suspect]) {
      console.log("man ==", man)
      console.log("suspectInfo ===", suspectInfo)
      dead.includes(man) ? bingo++ : bingo;
    }
    if (bingo == dead.length) {
      return suspect;
    } else {
      bingo = 0;
    }
  }
}

// function killer(suspectInfo, dead) {
//   //your code here...
//   for (let name in suspectInfo) {
//     if (dead.every(deadPerson => suspectInfo[name].includes(deadPerson))) {
//       return name;
//     }
//   }
// }
// [12, 5, 8, 130, 44].every(elem => elem >= 10);   // false
// [12, 54, 18, 130, 44].every(elem => elem >= 10); // true
// a = killer({'James': ['Jacob', 'Bill', 'Lucas'], 'Johnny': ['David', 'Kyle', 'Lucas'], 'Peter': ['Lucy', 'Kyle']},['Lucas', 'Bill'])


function dataReverse(data) {
  let norm = [];
  console.log('data.length', data.length)
  while (data.length) {
    console.log('data.splice(0,8)', data.splice(0, 8))
    norm.push(data.splice(0, 8));

  }
  console.log("norm", norm)
  // norm.reverse();
  // return norm.reduce(function(result,item){
  //   return result.concat(item);
  // },[])
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))

// function dataReverse(data) {
//   let norm = [];
//   while(data.length){
//     norm.push(data.splice(0,8));
//   }
//   norm.reverse();
//   return norm.reduce(function(result,item){
//     return result.concat(item);
//   },[])
// }

// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime", 2, 3, 4],
//   fifth: null,
//   sixth: undefined,
//   seventh: {}
// })

// strCount === ['strin', 'strin', 'strin', 'strin']
// i = 'first'
// strCount['fourth'].reduce((res, item) => {
//   if (typeof (item) === 'string') {
//     res++;
//   }
//   return res;
// }, 0)


// function strCount(obj) {
//   // Your code here
// console.log('strCount === ', obj)
//   result = 0;
//   for (i in obj) {
// //     console.log('strCount[i] === ', strCount[i])
//     if (obj[i] != null) {
//       result += Array.from(obj[i]).
//         reduce((res, item) => {
//           if (typeof (item) === 'string') {
//             res++;
//           }
//           // console.log('res ===',res)
//           return res;
//         }, 0)
//     }
//   }
//   console.log('result ====',result)
//   return result;
// }

// function strCount(obj){
//     console.log(Object.values(obj))
//     console.log(Object.entries(obj))
// }

// =============== Recursion ===============

// function strCount(obj) {
//   let res = 0;
//   for(i in obj) {
//     if (typeof obj[i] == 'object') res += strCount(obj[i]);
//     if (typeof obj[i] == 'string') res += 1
//   }
//   return res;
// }

// function strCount(obj) {
//   let res = 0;
//   for (i in obj) {
//     if(typeof obj[i] == 'null'){
//         return
//     }

//     if (typeof obj[i] == 'object') {
//       res += strCount(obj[i]);
//       }
//     if (typeof obj[i] == 'string'){ 
//       res += 1
//       }
//   }
//   return res;
// }

// function strCount(obj) {
//   let res = 0;
//   for(let i in obj) {
//     if (typeof obj[i] == 'null') res
//     if (typeof obj[i] == 'object') res += strCount(obj[i]);
//     if (typeof obj[i] == 'string') res += 1
//   }
//   return res;
// }
function likes(names) {
  if (names.length == 0) {
    return 'no one likes this'
  }
  if (names.length == 1) {
    return names[0] + ' likes this'
  }
  if (names.length == 2) {
    return names[0] + ' and ' + names[1] + ' like this'
  }
  if (names.length == 3) {
    return names[0] + ', ' + names[1] + ' ' + names[2] + ' like this'

  } else return names[0] + names[1] + ' and ' + (names.length - 2) + ' others like this';

}

console.clear();

// ===============  ===============c

function toWeirdCase(a) {
  a = a.split(' ')
  result = []

  for (item of a) {
    console.log("item === ", item)
    result.push(item
      .split('')
      .map((item, index) => index % 2 == 0 ? item.toUpperCase() : item.toLowerCase())
      .join('')
      .toString()
    )
  }
  return result.join(' ')
}



// toWeirdCase("String");//=> returns "StRiNg"
// toWeirdCase("Weird string case");//=> returns "WeIrD StRiNg CaSe"
// a = "Weird string case"
// result = []
// a = 'Srting'
// for (item of a) {
//   result.push(item
//     .split('')
//     .map((item, index) => index % 2 == 0 ? item.toUpperCase() : item.toLowerCase())
//     .join('')
//     .toString()
//   )
// }
// result.join('')

// ===============  dec to bin===============
Number(1234).toString(2).split('').reduce((res, i) => i === '1' ? res += 1 : res, 0)

var whatTimeIsIt = function (angle) {
  if (angle === 0) angle = 360
  if (angle > 360) angle -= 360
  let min = Math.floor((angle % 30) * 2);
  console.log('min =', min)
  console.log((angle / 30 - Math.trunc(angle / 30)) * 30 * 2)
  let hour = Math.floor(angle / 30)
  // let min = (angle/30 - Math.trunc(angle/30))*30*2
  min = min >= 10 ? min : `0${min}`
  console.log('min =', min)
  hour = hour >= 10 ? hour : `0${hour}`
  console.log('hour =', hour)
  return `${hour}:${min}`
}


var whatTimeIsIt = function (angle) {
  let hour = Math.floor(angle / 30);
  hour = (hour == 0) ? "12" : (hour < 10) ? `0${hour}` : hour;
  let min = Math.floor((angle % 30) * 2);
  min = (min < 10) ? `0${min}` : min;
  return `${hour}:${min}`;
}


function isPrime(num) {
  let end = Math.ceil(num ** (1 / 2)) + 10;
  if (num < 0) return false
  if ([0, 1, 4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22].includes(num)) return false
  if ([2, 3, 5, 7, 11, 13, 17, 19, 23].includes(num)) return true
  for (i = 2; i < end; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}
// working solution
// function rgb(r, g, b) {
//   console.log('r,g,b ===',r,g,b)
//   if(+r < 0) r = 0
//   if(+g < 0) g = 0
//   if(+b < 0) b = 0
//   if(+r > 255) r = 255
//   if(+g > 255) g = 255
//   if(+b > 255) b = 255
//   // n.toString(16)
//   r = r.toString(16).toUpperCase().padStart(2, '0')
//   console.log(r)
//   g = g.toString(16).toUpperCase().padStart(2, '0')
//   console.log(g)
//   b = b.toString(16).toUpperCase().padStart(2, '0')
//   console.log(b)
//   return `${r}${g}${b}`
// }
function rgb(...args) {
  let a = args.map(item => item > 255 ? item = 0 : item < 0 ? item = 0 : item)
  a.toString(16).toUpperCase().padStart(2,'0')
  // console.log(args)
  return a.map( item => item.toString(16).toUpperCase().padStart(2,'0')).join('')
}