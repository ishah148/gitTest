// const getHiddenCard = (number, hidden = 4) => {
//    return number.slice(12).padStart(hidden + 4, '*');
// }
// // String.prototype.padStart();
// // String.prototype.slice();
// const capitalize = (cityName) => cityName[0].toUpperCase() + cityName.slice(1);//  
// const isPensioner = (age) => age > 60;
// const isNeutralSoldier = (colorDef, colorBlock) => (colorDef !== 'red' && colorBlock === 'black');

// console.log('123123123123');

// // BEGIN (write your solution here)
// const buildUrl = (path, domain) => {
//    if (path.startsWith('/') && path.endsWith('/')) {
//       // return `https://${domain}${path}`;
//       return 'one';
//    }
//    if (!path.startsWith('/') && puth.endsWith('/')) {
//       return 'two';
//    }
//    if (path.startsWith('/') && !puth.endsWith('/')) {
//       return 'three';
//    }
// }

// const whoIsThisHouseToStarks = (name) =>{
//   if(name === 'Karstark' || name === 'Tally'){
//     return 'friend';
//   }else if(name === 'Lannister' || name === 'Frey'){
//     return 'enemy';
//   }else {
//     return 'neutral';
//   }

// }

// // END

// export default buildUrl;
//console.log('hello');
// let text = 'Hello'
// console.log(text[0]);
// console.log(text[0].toUpperCase());
// console.log(text[0].toUpperCase() === text[0]);

// ####################

// let text = "gey"
// const convertText = (text) => {
//    let a = text[0].toUpperCase() === text[0];
//    return (a ? text : '123123');
// }
// console.log(convertText(text));
// console.log(text[0]);
// console.log(text[0].toUpperCase());
// console.log(text[0].toUpperCase() === text[0]);
// console.log(convertText(text));
// let a = 5;
// let b = 1;
const fun = (a, b) => a === b ? 'a = b' : 'a != b';
// console.log(fun(a, b));
const getNumberExplanation = (number) => {
   switch (number) {
      case 666:
         return 'devil number';
      case 42:
         return 'answer for everything';
      case 7:
         return 'prime number';
      default:
         return 'null';
   }
}
const printNumbers = (initialNumber) => {
   // BEGIN (write your solution here)
   let i = 1;
   while (i <= initialNumber) {
      console.log(initialNumber);
      initialNumber--;
   }
   // END
   //console.log('finished!');
};
const multiplyNumbersFromRange = (startsWith, finished) => {
   let i = startsWith;
   let sum = 1;
   while (startsWith <= finished) {

      sum = sum * startsWith;
      console.log(`${startsWith} : ${sum}`);
      startsWith++;
   }
   return sum;
}
const joinNumbersFromRange = (startNumber, endNumber) => {
   let string = '';
   while (startNumber <= endNumber) {
      string = `${string}${startNumber}`
      startNumber++;
   }
   return string;
}
const printReversedNameBySymbol = (string) => {
   let i = 1;
   while (i <= string.length) {
      //      console.log(string[string.length -i]);
      i++;
   }
}
const countChars = (str, char) => {
   let i = 0;
   let count = 0;
   while (i < str.length) {
      if (str[i].toLowerCase() === char.toLowerCase()) {
         // Считаем только подходящие символы
         count = count + 1;
      }
      // Счетчик увеличивается в любом случае
      i = i + 1;
   }

   return count;
};
const reverse = (str) => {
   let i = 0;
   let result = '';
   while (i < str.length) {
      // console.log(`i = ${i}  str${i} = ${str[i]}`);
      result = `${result}${str[i]}`;
      // console.log(result);
      i++;
   }
   return result;
}

//console.log(reverse(''));
const filterString = (str, replace) => {
   let i = 0;
   let result = ''
   // console.log(`str - ${str}           str.length =${str.length}`) // debug
   while (i < str.length) {
      // console.log(`i = ${i}  str${i} = ${str[i]}`); // debug - delete after
      if (str[i] === replace) {
         // console.log('action'); // debug - delete after
         result = `${result}`;
      } else {
         result = `${result}${str[i]}`;
      }

      // console.log(result)
      i += 1;
   }
   return result;
}
// console.log(filterString('If I look back I am lost', 'I'));
// console.log(filterString('If I look back I am lost', 'o'));
makeItFunny = (str, number) => {

}
const hasChar = (string, search) => {
   for (let i = 0; i < string.length; i++) {
      if (string[i] === search) {
         return true;
      }
   }
   return false;
}
//console.log(hasChar('qwer1234qwer1234', '5'));
function isDivideBy(number, a, b) {
   if (number % a === 0 && number % b === 0) {
      return true;
   } else {
      return false;
   }
}
//console.log(isDivideBy(12,2,5));
function capitalizeWord(word) {
   return `${word[0].toUpperCase()}${word.slice(1)}`;
}
//  console.log(capitalizeWord('hello'));
const encrypt = (string) => {
   let i = 0;
   let result = '';
   let endFor = 0;
   // console.log(string.length);
   if (string.length % 2 === 1) {
      endFor = string.length - 1;
      // console.log('odd');
   } else {
      endFor = string.length;
   }
   for (i = 0; i < endFor; i = i + 2) {
      result = `${result}${string[i + 1]}${string[i]}`;
      // console.log(result);
   }
   return (string.length % 2 === 1) ? result + string[string.length - 1] : result;

}
// // console.log(encrypt('attack!'));
function century(year) {
   let century = (year - year % 100) / 100 + 1;
   // console.log(century);
   return ((year % 100) === 0) ? century - 1 : century;
}

// let a = 'hello';
// function noSpace(x){
//    return x.split(' ').join('');
// }


// let list = document.querySelector('.listofColors');

// list.onchange = function () {
// }
function fakeBin(x) {
   let arr = `${x}`.split('');
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 5) {
         arr[i] = 0;
      } else {
         arr[i] = 1;
      }
   }
   return arr.join('');
}
function areaLargestSquare(r) {
   return Math.round(Math.pow(2 * r / Math.sqrt(2), 2)); //code here
}
function solution(str, ending) {
   return (str.slice(-ending.length) === ending) ? true : false;
}
function simpleMultiplication(number) {
   return number % 2 === 0 ? number * 8 : number * 9;
}

function repeatStr(n, s) {
   return n.repeatStr(6);
}
function repeatStr(n, s) {
   return n.split('')*6
}
function repeatStr(n, s) {
   console.log(s.split('')*n);
   return 
}
function finalGrade (exam, projects) {
   if(exam >90 || projects >10 )
   {
      return 100;
   }
   if(exam > 75 && projects > 5){
      return 90;
   }
   if(exam > 50 && projects > 2){
      return 75;
   }
   else{
      return 0;
   }
 }