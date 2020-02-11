/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

/**
 * In this example solution should return the sum of input[0] and input[1]
 */


function solution(input){
    const N = parseInt(input[0]);

    const people = [];

    let lowestName = "";
    let lowest = Infinity;

    for(let i = 1 ; i < N + 1 ; i++ ){
        let data = input[i].split(" ");
        let name = data[0];
        let size = parseInt(data[1]);

        if(size < lowest){
            lowest = size;
            lowestName = name;
        }
    }
    return lowestName;
}

function ContestResponse(){
    const output = solution(input);
    console.log(output);
    //implement your code here using input array
}

module.exports = solution;