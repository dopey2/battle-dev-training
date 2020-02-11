/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

/**
 * In this example solution should return the sum of input[0] and input[1]
 */


var input = [];


function findMostValuableIndex(data){
    let index = -1;
    let highestValue = 0;

    for(let i = 0 ; i < data.length ; i++){
        if(data[i].valuePerGram > highestValue){
            index = i;
            highestValue = data[i].valuePerGram
        }
    }

    return index;
}

function solution(input){
    const data = input[0].split(" ");
    const N = parseInt(data[0]);
    const M = parseInt(data[1]);
    const C = parseInt(data[2]);

    const objects = [];

    for(let i = 1 ; i < N + 1 ; i++){
        const preciousStoneData = input[i].split(" ");
        const totalValue = parseInt(preciousStoneData[0]);
        const weight = parseInt(preciousStoneData[1]);

        objects.push({totalValue, weight, valuePerGram: totalValue / weight, isStone: true});
    }

    for(let i = N + 1 ; i < N + M + 1 ; i++){
        const preciousStoneData = input[i].split(" ");
        const valuePerGram = parseInt(preciousStoneData[0]);
        const weight = parseInt(preciousStoneData[1]);

        objects.push({totalValue: valuePerGram * weight, weight, valuePerGram, isStone: false});
    }

    let maxValue = 0;
    let totalWeight = 0;

    let isDone = false;

    while(!isDone){

        const mostValuableIndex = findMostValuableIndex(objects);
        const mostValuable = objects[mostValuableIndex];

        if(mostValuable){

            if(mostValuable.isStone){
                if(mostValuable.weight + totalWeight < C){
                    maxValue += mostValuable.totalValue;
                    totalWeight += mostValuable.weight;
                    objects.splice(mostValuableIndex, mostValuableIndex + 1)
                }
                else {
                    objects.splice(mostValuableIndex, mostValuableIndex + 1)
                }
            }
            else {
                if(mostValuable.weight + totalWeight < C){
                    maxValue += mostValuable.totalValue;
                    totalWeight += mostValuable.weight;
                    objects.splice(mostValuableIndex, mostValuableIndex + 1)
                }
                else {
                    let availableWeight = C - totalWeight;
                    maxValue+= mostValuable.valuePerGram * availableWeight;
                    totalWeight += availableWeight;
                }
            }

        }

        if(totalWeight === C || !mostValuable){
            isDone = true;
        }
    }

    return maxValue + "";
}

function ContestResponse(){
    const output = solution(input);
    console.log(output);



    //implement your code here using input array
}

module.exports = solution;