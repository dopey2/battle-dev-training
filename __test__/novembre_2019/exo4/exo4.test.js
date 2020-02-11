const fs = require("fs");

const DATA_SET_COUNT = 4;
const PATH_TO_SOLUTION = "../../../training/novembre_2019/exo4";
const TEST_NAME = "Template ";


const solution = require(PATH_TO_SOLUTION);

const testCases = [];

for(let i = 1; i < DATA_SET_COUNT + 1 ; i++){

    const testData = {
        input: [],
        output: ""
    };

    const inputPath = __dirname + '/data/input' + i + '.txt';
    const outputPath = __dirname + '/data/output' + i + '.txt';

    fs.readFileSync(inputPath, 'utf-8').split(/\r?\n/).forEach(function(line) {
        testData.input.push(line);
    });

    fs.readFileSync(outputPath, 'utf-8').split(/\r?\n/).forEach(function(line) {
        testData.output = line;
    });

    testCases.push(testData);
}

describe(TEST_NAME, () => {
    testCases.forEach((testData, i) => {
        it("test case " + i, () => {
            expect(solution(testData.input)).toBe(testData.output);
        });
    });
});
