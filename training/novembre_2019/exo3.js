/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

/**
 * In this example solution should return the sum of input[0] and input[1]
 */


var input = [];


function solution(input){
    const a = parseInt(input[0]);
    const b = parseInt(input[1]);

    return a + b + "";
}

function ContestResponse(){
    const output = solution(input);
    console.log(output);
    //implement your code here using input array
}

module.exports = solution;