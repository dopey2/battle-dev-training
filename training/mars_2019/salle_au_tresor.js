/**
* Daniel Gabor
* https://demo.isograd.com/runtest/QuestionDisplayer 
*/

/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];

function goToPosition(vectorA, vectorB){
    
    const x = vectorB.x - vectorA.x;
    const y = vectorB.y - vectorA.y;
    
    let output = "";
    
    for(let i = 0; i < Math.abs(x) ; i++){
        if( x > 0){
            output += ">";
        }
        else if(x < 0){
            output += "<";
        }
    }
    
    for(let i = 0; i < Math.abs(y) ; i++){
        if( y > 0){
            output += "v"
        }
        else if(y < 0){
            output += "^";
        }
    }
    
    return output;    
}

function solution(_input){
    const n = parseInt(_input[0]);

    const coinsPosition = [];
    const multipliersPosition = [];

    for(let i = 0 ; i < n ; i++){

        const dataForCurrentRow = _input[i + 1];
        const objectForRowAsArray = dataForCurrentRow.split("");

        for(let j = 0 ; j < objectForRowAsArray.length; j++){
            if(objectForRowAsArray[j] === "o"){
                coinsPosition.push({x: j, y: i});
            }
            else if(objectForRowAsArray[j] === "*"){
                multipliersPosition.push({x: j, y: i});
            }
        }
    }

    let position = {x: 0, y: 0};
    let movement = "";

    for(let i = 0 ; i < coinsPosition.length; i++){
        const movToNextCoin = goToPosition(position, coinsPosition[i]);
        movement += movToNextCoin;
        movement += "x";
        position = coinsPosition[i];
    }

    for(let i = 0 ; i < multipliersPosition.length; i++){
        const moveToNextMultiplier = goToPosition(position, multipliersPosition[i]);
        movement += moveToNextMultiplier;
        movement += "x";
        position = multipliersPosition[i];
    }

    return movement;
}

function ContestResponse(){
    const movement = solution(input);
    console.log(movement);
}

module.exports = solution;