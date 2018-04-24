/* Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?

*/

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////
let squarePathMap = {};

for (let side = 1; side < 10; ++side) {
    const sideLength = side;

    let nodes = Array.from(Array(sideLength), () => new Array(sideLength)),
        allPaths = 0;

    // Create objects
    for (let h = 0; h < sideLength; ++h) {
        for (let w = 0; w < sideLength; ++w) {
            nodes[h][w] = {};
        }
    }

    // Loop again to associate objects
    for (let h = sideLength - 1; h >= 0; --h) {
        for (let w = sideLength - 1; w >= 0; --w) {
            if (h > 0) {
                nodes[h][w].down = nodes[h - 1][w];
            }
            if (w > 0) {
                nodes[h][w].side = nodes[h][w - 1];
            }
        }
    }

    // Run the alogirthm
    path({
        x: sideLength,
        y: sideLength
    }, [], true);


    // Save path in square
    squarePathMap[sideLength] = allPaths;
    console.log(squarePathMap);

    function path(coord, currPath, isStart) {
        // If at the end, push to array
        if (coord.x == coord.y && coord.x == 0) {
            allPaths++;
            return;
        }

        // If you find yourself at a non initial square, just sum those paths from the previous iterations
        if(coord.x == coord.y && !isStart) {
            // console.log(coord.x, squarePathMap[coord.x]);
            // console.log(coord, sideLength);
            allPaths += squarePathMap[coord.x];
            return;
        }

        if (coord.x > 0) {
            let nextNode = {
                x: coord.x - 1,
                y: coord.y
            };

            let newPath = currPath.slice();
            newPath.push(nextNode);

            path(nextNode, newPath, false);
        }
        if (coord.y > 0) {
            let nextNode = {
                x: coord.x,
                y: coord.y - 1
            };

            let newPath = currPath.slice();
            newPath.push(nextNode);

            path(nextNode, newPath, false);
        }
    }
}

// console.log(JSON.stringify(nodes));

////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');