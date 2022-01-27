function get(num,str,obj) {
    return str;
  }
  let a = get;
 /*
 console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]
*/
var ArrowFunc = function(arr) {
    return arr.map( x => String.fromCharCode(x) ).join(''); //Complete this function
  }

  function mergeArrays(arr1, arr2) {
  
    let arr3 = arr1.concat(arr2).sort((a,b)=>a-b);
    
    let result = new Set(arr3);
    
    return Array.from(result);
    
  }














  function colourAssociation(array) {
    let res = [];
     
     res = array.map( function(item) { 
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
  
    for(let i = 0;i < num1.length;i++){
      result[i] = +num1[i]+(+num2[i]);
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
    return array.map( function(item) { 
           return Object.fromEntries([item]);
     });
   }
   
   console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]])
   );
   function combine() {
    // Your code here
  }
console.log(123);
const A = { a: 10, b: 20, c: 30 }
const B = { a: 3, c: 6, d: 3 }
const C = {'andry':'11', 'boil':'12','colya':'13'}
console.log(A);
console.log(B);
arr = [-1, 2, 3, -9];
for(item in A){
  console.log(item);
}
console.log(Object.entries(A))
let tmp = Object.entries(A);
console.log('---one---');
tmp.map((item,index) => console.log(index))
console.log('---two---');
console.log('--->');
console.log(tmp);
console.log('--->');
console.log('555');

console.log('123')
const A = { a: 10, b: 20, c: 30 }
const B = { a: 3, c: 6, d: 3 }
const C = {'andry':'11', 'boil':'12','colya':'13'}
console.log(A);
console.log(B);
arr = [-1, 2, 3, -9];
for(item in A){
  console.log(item);
}
console.log(Object.entries(A))
let tmp = Object.entries(A);
console.log('---one---');
tmp.map((item,index) => console.log(item,index))
console.log('---two---');
console.log('--->');
console.log(tmp);
console.log('<---');
console.log(tmp[0][1]);
let tmp1 = tmp;
let tmp2 = Object.entries(B);
console.log(tmp2);
console.log('reduce')

console.log('reduce end');
console.log('test');
names(tmp1,tmp2);
function names( ...args){
  args.reduce((a,b,c,d) => console.log('a',a,'\nb',b,'\nc',c,'\nd',d));
}
// console.log(Object.values(A))

