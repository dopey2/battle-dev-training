/*******
 * Read input from STDIN
 * Use: console.log()  to output your result.
 * Use: console.error() to output debug information into STDERR
 * ***/

var input = [];


function findCommonCharAndExcludePrevResponse(words, wordCount, prevResponse){
    const responses = [];

    const chars = words[0].split("");

    chars.forEach((c, index) => {

        if(prevResponse.length && prevResponse.length === index + 1 && prevResponse[index][0] === c){
            return;
        }

        let indexesForCurrentChar = [index];

        for(let i = 1 ; i < wordCount ; i ++){
            const charsNextWord = words[i].split("");

            let indexToStart = 0;

            const dataPrevValidChar = responses[responses.length - 1];
            if(dataPrevValidChar){
                const indexesOfPrevValidChar = dataPrevValidChar[1];
                indexToStart = indexesOfPrevValidChar[i];
            }

            const indexOfChar = charsNextWord.indexOf(c, indexToStart);

            if(indexOfChar!== -1){

                if(responses.length > 0){
                    const indexesOfPrevValidChar = dataPrevValidChar[1];
                    if(indexOfChar > indexesOfPrevValidChar[i]){
                        indexesForCurrentChar.push(indexOfChar);
                    }
                }
                else {
                    indexesForCurrentChar.push(indexOfChar)
                }
            }
        }

        if(indexesForCurrentChar.length === wordCount){
            responses.push([c, indexesForCurrentChar]);
        }
    });

    return responses;
}


function solution(input){
    const wordCount = parseInt(input[0]);
    const words = [];

    for(let i = 1; i < wordCount + 1 ; i++){
        words.push(input[i]);
    }


    let isDone = false;
    let response = [];

    while(!isDone){
        const currentResponse = findCommonCharAndExcludePrevResponse(words, wordCount, response);

        if(currentResponse.length <= response.length){
            isDone = true;
        }
        else {
            response = currentResponse;
        }
    }

    let out = "";

    response.forEach((data) => {
        out += data[0];
    });

    return out || "KO";

}


function ContestResponse(){
    const output = solution(input);
    console.log(output);
    //implement your code here using input array
}

module.exports = solution;