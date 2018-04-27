/* Problem Vinoad

I failed :{

*/
'use strict';

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////

const maxLength = 10,
    maxNumSize = 100;

let arr = [];

let length = generateNum(maxLength);
for (let i = 0; i < length; ++i) {
    arr.push(generateNum(maxNumSize));
}
// Now that we have our array lets do the sort algorithm
for (let i = 0; i < arr.length; ++i) {
    // First find the min
    let min = arr[i],
        minIndex = i;
    for (let j = i; j < arr.length; ++j) {
        if (arr[j] < min) {
            min = arr[j];
            minIndex = j;
        }
    }

    // Now keep swapping until you've reached your end state
    for (let j = minIndex; j >= i; --j) {
        console.log(arr);
        rotate(arr, j, i);
    }
}

function rotate(arr, j, i) {

    console.log(j);
    if (j - 2 >= 0) {
        let temp = arr[j - 2];
        arr[j - 2] = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        rotate(arr, j - 2, i);
    }
}

function generateNum(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');