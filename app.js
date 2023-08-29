// Given two values, return the first one if it is falsy, otherwise return the second one

function filterOutFalsy (value1, value2) {
return (!value1) ? value1 : value2;
}

console.log(filterOutFalsy(0, 5))
console.log(filterOutFalsy(false, 100))
console.log(filterOutFalsy(true, 'Dog'))


//Return length of any given array 

/*function arrLength (arr) {
    return arr.length;
}

console.log(arrLength([1, 2, 3, 4]))
console.log(arrLength([1, 2, 3]))
console.log(arrLength([]))
*/

//Get the last element in an array

function lastElem (arr) {
    return arr[arr.length - 1]
}

console.log(lastElem([1, 2, 3, 4]))
console.log(lastElem([1, 2, 3, 'dog']))
console.log(lastElem([null, 5, false]))

//Find the sum of an array

function arrSum (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {

        sum = sum + arr[i];
    }
    return sum;
}

console.log(arrSum([2, 2, 2]));
console.log(arrSum([300, 100, 200, 200]));


// Given a number, add up all the numbers from one to the number that is given.

function progressiveSum (numb) {
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

return timerMinutes + ':' + timerSeconds;
}

console.log(calcTime(600))
console.log(calcTime(300))

//Find the largest number

function getMax (arr) {
    let max = arr[0];
    for (i = 0; i < arr.length; ++i) {
     if (arr[i] > max) {
        max = arr[i];
     }
    }
return max;
}

console.log(getMax([1, 3, 5]))
console.log(getMax([-100, -200, -500]))