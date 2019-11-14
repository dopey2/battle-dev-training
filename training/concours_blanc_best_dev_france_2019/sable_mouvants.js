/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

function solution(_input) {
    const rowsAndCols = _input[0].split(" ").map((x) => parseInt(x));
    const [rowCount, colCount] = rowsAndCols;

    const map = _input.splice(1, rowCount + 1 ).map((row) => row.split(""));
    const mapDepth = map.map((c) => []);

    let doneCount = 0;
    let currentDepth = 0;
    let biggest = 0;

    while(doneCount < rowCount * colCount){

        for(let i = 0; i  < map.length; i++){
            const row = map[i];

            for(let j = 0 ; j < row.length; j++){

                if(mapDepth[i][j] !== undefined){
                    continue;
                }

                const col = row[j];
                if(col === "."){
                    mapDepth[i][j] = 0;
                    doneCount++;
                }

                const top = mapDepth[i -1] ? mapDepth[i -1][j] : undefined;
                const bottom = mapDepth[i + 1] ? mapDepth[i + 1][j] : undefined;
                const left = mapDepth[i][j -1];
                const right = mapDepth[i][j + 1];

                if((top <= currentDepth || bottom <= currentDepth || right <= currentDepth || left <= currentDepth ) && col !== "."){

                    const lowest = [currentDepth, top, bottom, left, right].reduce((prev, current) => current < prev ? current : prev, Infinity);

                    mapDepth[i][j] = lowest + 1;

                    if(lowest + 1 > biggest ){
                        biggest = lowest + 1;
                    }

                    doneCount++;
                }
            }
        }

        currentDepth++
    }

    return biggest.toString();
}

function ContestResponse(){
    const out = solution(input);
    console.log(out)
    //implement your code here using input array
}

module.exports = solution;

