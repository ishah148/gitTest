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