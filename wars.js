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