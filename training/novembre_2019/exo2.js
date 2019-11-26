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
    const data = input[0].split(" ");

    const wireCount = parseInt(data[0]);
    const requestCount = parseInt(data[1]);
    const requests = [];

    const availableWires = [];

    for(let i = 0 ; i < wireCount; i++){
        availableWires.push({begin:0, end: 0});
    }


    let res = "";

    for(let i = 1; i < requestCount + 1 ; i++){
        let requestData = input[i].split(" ");
        let begin = parseInt(requestData[0]);
        let end = parseInt(requestData[1]);

        requests.push({begin, end});
    }

    requests.sort((a, b) => {
        return a.begin - b.begin;
    });


    for(let i = 0; i < requests.length ; i++){


        const wireIndex = availableWires.findIndex((wire) =>{
            return  wire.end < requests[i].begin || requests[i].begin < wire.begin;
        });

        if(wireIndex !== -1){
            availableWires[wireIndex].begin = requests[i].begin;
            availableWires[wireIndex].end = requests[i].end;

            const wirePosition = wireIndex + 1;

            if(!res){
                res += wirePosition;
            }
            else {
                res = res + " " + wirePosition;
            }
        }
        else {
            return "pas possible"
        }
    }

    return res;
}

function ContestResponse(){
    const output = solution(input);
    console.log(output);
    //implement your code here using input array
}

module.exports = solution;