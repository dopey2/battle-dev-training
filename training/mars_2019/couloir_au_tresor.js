/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

/**
 * In this example solution should return the sum of input[0] and input[1]
 */


var input = [];

function checkResult(str){
    str = str.split("");
    let result = 0;
    str.forEach((obj) => {
       if(obj === "o"){
           result++;
       }
       else if(obj === "*"){
           result *=2;
       }
    });
}


function getNextMove(corridor){
    const data = corridor.split("X");
    let left = data[0].split("").reverse();
    let right = data[1].split("");

    let indexOfCoinInLeft = left.indexOf("o") === -1 ? Infinity : left.indexOf("o");
    let indexOfCoinInRight = right.indexOf("o") === -1 ? Infinity : right.indexOf("o");

    let numberOfCoinInLeft = indexOfCoinInLeft === Infinity ? 0 : 1;
    let numberOfCoinInRight = indexOfCoinInRight === Infinity ? 0 : 1;

    let shouldGoLeft = indexOfCoinInLeft < indexOfCoinInRight;

    if(indexOfCoinInRight === Infinity && indexOfCoinInLeft === Infinity){
        let lot = "";
        for(let i = 0 ; i < right.length + left.length; i++){
            lot += "*"
        }
        return {corridor: "", lot};
    }


    if(indexOfCoinInLeft === indexOfCoinInRight){

        while(right[indexOfCoinInRight + 1] === "o"){
            numberOfCoinInRight++;
            indexOfCoinInRight++;
        }
        while(left[indexOfCoinInLeft + 1] === "o"){
            numberOfCoinInLeft++;
            indexOfCoinInLeft++;
        }

        shouldGoLeft = numberOfCoinInLeft > numberOfCoinInRight
    }

    let lot = "";

    if(shouldGoLeft){
        lot = left.splice(0, indexOfCoinInLeft + 1).join("");
        left.unshift("X");
    }
    else {
        lot = right.splice(0, indexOfCoinInRight + 1).join("");
        right.unshift("X");
    }

    right = right.join("");
    left = left.reverse().join("");

    return {corridor: left + right, lot}
}

function solution(input){
    let corridor = input[1];

    let output = "";

    while(corridor.length){
        const res = getNextMove(corridor);
        corridor = res.corridor;
        output += res.lot;
    }

    return output;
}

function ContestResponse(){
    const output = solution(input);
    console.log(output);
}

module.exports = solution;