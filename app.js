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