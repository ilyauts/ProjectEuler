/* Problem 14

The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.

*/

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////

let longestStartingNum = 1,
    longestChain = 0,
    million = 1e6;
for(let startingNum = longestStartingNum; startingNum <= million; ++startingNum) {
    let currChain = chainDetermine(startingNum, 1);

    if(currChain > longestChain) {
        longestChain = currChain;
        longestStartingNum = startingNum;
    }
}

function chainDetermine(num, count) {
    if(num == 1) {
        return count;
    } else if(num % 2 == 0) {
        return chainDetermine(num / 2, count + 1);
    } else {
        return chainDetermine(3 * num + 1, count + 1);
    }
}

console.log('The longest chain is', longestChain, 'for the starting number', longestStartingNum);

////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');