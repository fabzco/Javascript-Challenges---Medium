// Given two values, return the first one if it is falsy, otherwise return the second one

function filterOutFalsy(value1, value2) {
  return !value1 ? value1 : value2;
}

console.log(filterOutFalsy(0, 5));
console.log(filterOutFalsy(false, 100));
console.log(filterOutFalsy(true, "Dog"));

//Return length of any given array

/*function arrLength (arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3, 4]))
console.log(arrLength([1, 2, 3]))
console.log(arrLength([]))
*/

//Get the last element in an array

function lastElem(arr) {
  return arr[arr.length - 1];
}

console.log(lastElem([1, 2, 3, 4]));
console.log(lastElem([1, 2, 3, "dog"]));
console.log(lastElem([null, 5, false]));

//Find the sum of an array

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([300, 100, 200, 200]));

// Given a number, add up all the numbers from one to the number that is given.

function progressiveSum(numb) {
  let sum = 0;
  for (let i = 1; i <= numb; ++i) {
    sum = sum + i;
  }
  return sum;
}

console.log(progressiveSum(3));
console.log(progressiveSum(6));
console.log(progressiveSum(10));

//Given a number in seconds, return this number in mm:ss format

function calcTime (seconds) {
  let timerMinutes = Math.floor(seconds / 60);
  let timerSeconds = seconds % 60;

  if (timerMinutes.toString().length === 1) {
    timerMinutes = '0' + timerMinutes
  }

  if (timerSeconds.toString().length === 1) {
    timerSeconds = timerSeconds + '0'
  }

  return timerMinutes + ":" + timerSeconds;
}

console.log(calcTime(600));
console.log(calcTime(300));
console.log(calcTime(90030));

//Find the largest number

function getMax(arr1) {
  max = arr1[0]
  for (i = 1; i < arr1.length; ++i) {
    if (arr1[i] > max){
      max = arr1[i]
    }
  }
  return max;
}

console.log(getMax([1, 3, 5]));
console.log(getMax([-100, -200, -500]));


//Given a string, return the reversed string

function reverseString (str) {
 let reversedString = '';

  for (let i = 0; i < str.length; ++i) {
   reversedString = str[i] + reversedString;
  }
  return reversedString

}

console.log(reverseString('abc'));
console.log(reverseString('This is cool'));

//Turn every element in an array into 0

/*function convertToZeros (arra) {
let newArr = [];

for (let i = 0; i < arra.length; ++i) {
   newArr[i] = 0
  }
return newArr;
}
*/

//Using fill method

/* function convertToZeros (arra) {
  return new Array(arra.length).fill(0) 
 }
*/

//Using map method

function convertToZeros (arra) {
  return arra.map(elem => 0);
}
console.log(convertToZeros([5, 100, 1]))
console.log(convertToZeros([1, 2, 3, 4, 5, 6]))

//Filter out all the apples

function removeApples (arr) {
  let newArr = []

  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] !== 'Apple') {
      newArr.push(arr[i]);
    }

  }
return newArr
}

console.log(removeApples(['Banana', 'Orange', 'Apple']));

