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

    const expected = input[0].split("");
    const lineCount = parseInt(input[1]);

    let str = [];

    for(let i = 2; i < lineCount + 2 ; i++){
        const line = input[i].split("");

        str = [...str, ...line];
    }

    let i = 0;

    for(let j = 0; j < str.length && expected[i] !== undefined; j++){
        const expectedChar = expected[i];
        const currentChar = str[j];

        if(expectedChar === currentChar){
            i++
        }
    }

    return i === expected.length ? "1" : "0";
}

function ContestResponse(){
    const output = solution(input);
    console.log(output);
    //implement your code here using input array
}

module.exports = solution;