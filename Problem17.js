/* Problem 16

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/
'use strict';

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////

// Definitions
const definitions = {
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen',
    20 : 'twenty',
    30 : 'thirty',
    40 : 'forty',
    50 : 'fifty',
    60 : 'sixty',
    70 : 'seventy',
    80 : 'eighty',
    90 : 'ninety'
}

let string = '';
let cap = 1000;

for(let i = 1; i <= cap; ++i) {
    addText(i, false);

}
console.log('Length:', string.length);

function addText(i, includeAnd) {
    if(i == 0) {
        return;
    }
    else if(i < 20) {
        string += (includeAnd) ? 'and' + definitions[i] : definitions[i];
    } else if(i < 100) {
        let num = i;
        let modulo = Number(num.toString()[1]);
        string += definitions[i - modulo];
        addText(modulo, true);
    } else if(i < 1000) {
        let num = i;
        let modulo2 = Number(num.toString()[2]);
        let modulo1 = Number(num.toString()[1]) * 10;

        let indicator = Number(num.toString()[0]);
        string += definitions[indicator] + 'hundred';
        addText((modulo1 + modulo2).toString(), true);
    } else if(i < 10000) {
        let num = i;
        let modulo3 = Number(num.toString()[3]);
        let modulo2 = Number(num.toString()[2]) * 10;
        let modulo1 = Number(num.toString()[1]) * 100;

        let indicator = Number(num.toString()[0]);
        string += definitions[indicator] + 'thousand';
        addText((modulo1 + modulo2 + modulo3));
    }
}


////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');