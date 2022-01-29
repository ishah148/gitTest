function nbDig(n, d) {
    let res = 0;
    let arr = [];
    for(let i = 0;i <= n; i++){
      arr[i] = i**2;
    }
    let tmp = arr.toString();
    // n = arr.toString().length;
    // console.log(n)
    for(let i = 0; i < 26537536;i++){
      if(tmp[i] == d){
        res++;
      }
    }
    return res
  }
// function nbDig(n, d) {
//     let count = 0;
//     for(let i = 0; i <= n; i++) {
//       (i**2).toString().split('').forEach((item) => +item === d ? count++ : count);
//     }
//     return count;
// }
  console.log('nbD ===',nbDig(2000000, 1))