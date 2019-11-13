/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

function getCharNTime(c, n){
    let str = "";

    for(let i = 0 ; i < n; i++){
        str += c
    }

    return str
}

function solution(_input) {
    const n = parseInt(_input[0]);

    let str = "";

    for(let i = 0 ; i < (3 * n) -1; i++){
        if(i === 0 || i === (n * 3) -2){
            str += getCharNTime(".", n - 1) + getCharNTime("X", n) + getCharNTime(".", n - 1) + "\n";
        }
        else if((i > 0 && i < n - 1) || (( i > (n * 2 ) -1) && (i < (n * 3) -2))){
            str += getCharNTime(".", n - 1) + "X" + getCharNTime(".", n - 2) + "X" + getCharNTime(".", n - 1) + "\n";
        }
        else if( i === n -1 || ( i === (n * 2) -1) ){
            str += getCharNTime("X", n) + getCharNTime(".", n - 2) + getCharNTime("X", n) +  "\n";
        }
        else if(i > n -1 && i < (n * 2 ) - 2) {
            str += "X" + getCharNTime(".", (n * 3) - 4) + "X" + "\n";
        }
    }

    return str;
}

function ContestResponse(){
    const out = solution(input);
    console.log(out)
    //implement your code here using input array
}
ContestResponse();

module.exports = solution;