/* Problem 12

The sequence of triangle numbers is generated by adding the natural numbers. So the 7th triangle number would be 1 + 2 + 3 + 4 + 5 + 6 + 7 = 28. The first ten terms would be:

1, 3, 6, 10, 15, 21, 28, 36, 45, 55, ...

Let us list the factors of the first seven triangle numbers:

 1: 1
 3: 1,3
 6: 1,2,3,6
10: 1,2,5,10
15: 1,3,5,15
21: 1,3,7,21
28: 1,2,4,7,14,28
We can see that 28 is the first triangle number to have over five divisors.

What is the value of the first triangle number to have over five hundred divisors?

*/

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////

let triangles = [],
    maxDivisors = 0,
    maxIndex = 0,
    runningTriangle = 0;

    let i = 1;
while (maxDivisors < 500) {
    runningTriangle += i;
    let currFactors = factorize(runningTriangle).length;

    maxIndex = (maxDivisors < currFactors) ? runningTriangle : maxIndex;
    maxDivisors = (maxDivisors < currFactors) ? currFactors : maxDivisors;

    triangles.push({
        num: runningTriangle,
        factors: currFactors
    });
    ++i;
}

function generateTriangleNum(index) {
    let triangle = 0;
    for (let i = 0; i < index; ++i) {
        triangle += i;
    }
    return triangle;
}

function factorize(num) {
    let factors = [],
        startingNum = (num % 2 == 0) ? 2 : 3,
        increment = (num % 2 == 0) ? 1 : 2;

    // Let's get one in here first
    factors.push(1);
    // for(let i = startingNum; i < (num + 1) /2; i = i + increment) {
    for (let i = startingNum; i <= Math.sqrt(num); i = i + increment) {
        if (num % i == 0) {
            factors.push(i);
            if (num / i != i) {
                factors.push(num / i);
            }
        }
    }

    // Let's get the num itself last
    factors.push(num);
    return factors;
}

function getPrimes(limit) {
    let primes = [];
    primes.push(2);

    for (let i = 3; i <= limit; i = i + 2) {
        let primeFound = true;
        for (let prime of primes) {
            if (i % prime == 0) {
                primeFound = false;
                break;
            }
        }
        if (primeFound) {
            primes.push(i);
        }
    }

    return primes;
}

console.log('Triangles', triangles);
console.log('Max Divisors', maxDivisors, maxIndex);

////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');