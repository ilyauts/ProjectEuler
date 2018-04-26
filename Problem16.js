/* Problem 16

215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2^1000?

*/

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////
const level = 1000;
let masterStr = '2',
    masterNewStr = '',
    currRemainder = 0;

for (let lv = 2; lv <= level; ++lv) {
    masterNewStr = '';
    currRemainder = 0;
    for (let i = masterStr.length - 1; i >= 0; --i) {
        let doubleStr = (Number(masterStr[i]) * 2 + currRemainder).toString();
        masterNewStr = ((doubleStr.length > 1) ? doubleStr[1] : doubleStr) + masterNewStr;
        currRemainder = (doubleStr.length > 1) ? 1 : 0;
    }
    masterStr = (currRemainder != 0) ? currRemainder.toString() + masterNewStr : masterNewStr;
    console.log('Index:', lv, 'Sum:', findSum(masterStr));
}

function findSum(num) {
    let strNum = num.toString();
    let sum = 0;
    // console.log(strNum);
    for (let i = 0; i < strNum.length; ++i) {
        sum += Number(strNum[i]);
    }
    return sum;
}

////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');