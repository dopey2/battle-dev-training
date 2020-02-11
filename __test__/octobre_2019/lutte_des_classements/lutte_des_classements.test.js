const fs = require("fs");

const DATA_SET_COUNT = 5;
const PATH_TO_SOLUTION = "../../../training/octobre_2019/lutte_des_classements";
const TEST_NAME = "Test";

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
