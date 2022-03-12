let a = "1 2 3 4 5"

a =  "1 2 -3 4 5"
function highAndLow(numbers){
    let temp = numbers.split(' ')
        .map(item => +item)
        .sort((a,b) =>b-a)

    return `${temp[0]} ${temp[temp.length - 1]}`;
  }

highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4')