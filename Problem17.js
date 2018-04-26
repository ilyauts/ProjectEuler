/* Problem 16

If the numbers 1 to 5 are written out in words: one, two, three, four, five, then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.

If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?


NOTE: Do not count spaces or hyphens. For example, 342 (three hundred and forty-two) contains 23 letters and 115 (one hundred and fifteen) contains 20 letters. The use of "and" when writing out numbers is in compliance with British usage.

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