/* Problem 15

Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.


How many such routes are there through a 20×20 grid?

*/

let time = new Date().getTime(),
    millisInSecond = 1000.;

/////////////// Code ///////////////
let squarePathMap = {};

const limit = 21;
let nodes = Array.from(Array(limit), () => new Array(limit)),
    allPaths = 0;

// Create objects
for (let h = 0; h < limit; ++h) {
    for (let w = 0; w < limit; ++w) {
        nodes[h][w] = {};
    }
}

// Loop again to associate objects
for (let h = limit - 1; h >= 0; --h) {
    for (let w = limit - 1; w >= 0; --w) {
        if (h > 0) {
            nodes[h][w].down = nodes[h - 1][w];
        }
        if (w > 0) {
            nodes[h][w].side = nodes[h][w - 1];
        }
        nodes[h][w].count = 0;
    }
}

for (let side = 1; side < limit; ++side) {
    const sideLength = side;


    // Run the algorithm
    path({
        x: sideLength,
        y: sideLength
    }, [], true);


    // Save path in square
    squarePathMap[sideLength] = allPaths;
    // console.log(squarePathMap);

    function path(coord, currPath, isStart) {
        // If at the end, push to array
        if (coord.x == coord.y && coord.x == 0) {
            allPaths++;

            // Update all paths
            for (let p of currPath) {
                nodes[p.x][p.y].count++;
            }
            return 1;
        }

        // If you find yourself at a non initial square, just sum those paths from the previous iterations
        if (nodes[coord.x][coord.y].count && !isStart) {
            allPaths += nodes[coord.x][coord.y].count;
            return nodes[coord.x][coord.y].count;
        }
        // console.log(coord.x, coord.y);
        if (coord.x > 0) {
            let nextNode = {
                x: coord.x - 1,
                y: coord.y
            };

            let newPath = currPath.slice();
            newPath.push(nextNode);

            // If smaller path exists, no need to push it further
            nodes[coord.x][coord.y].count += (nodes[nextNode.x][nextNode.y].count) ? nodes[nextNode.x][nextNode.y].count : path(nextNode, newPath, false);
        }
        if (coord.y > 0) {
            let nextNode = {
                x: coord.x,
                y: coord.y - 1
            };

            let newPath = currPath.slice();
            newPath.push(nextNode);

            // If smaller path exists, no need to push it further
            nodes[coord.x][coord.y].count += (nodes[nextNode.x][nextNode.y].count) ? nodes[nextNode.x][nextNode.y].count : path(nextNode, newPath, false);
        }

        return nodes[coord.x][coord.y].count;
    }
}

console.log('There are', nodes[nodes.length - 1][nodes.length - 1].count, 'paths in a', nodes.length - 1, 'x', nodes.length - 1, 'grid');
////////////////////////////////////

let timeEnd = new Date().getTime();
let difference = timeEnd - time;
console.log('Calculation took: ', difference / millisInSecond, ' seconds');