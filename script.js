// 1.Given an array of integers, rearrange the elements in a way that all the even numbers
// come before the odd numbers.

function rearrange (numbers){
    function inputSort(a, b){
        if(a % 2 === 0 && b % 2 !== 0 ){
            return -1;
        }else if (a % 2 !== 0 && b % 2 ===0){
            return 1;
        }else{
            return 0;
        }
    }
    numbers.sort(inputSort);
    return numbers
}
const input = [5,6,1,8,2,5,4,6];
const finalResult = rearrange(input);
console.log(finalResult);

// Write a function to find the missing number in an array of integers from 1 to N.
function missingNumber (int , N){
    const totalSum = (N*(N+1)) / 2;
    const intSum = int.reduce((acc,num) => acc+num,0);
    const missingNumber = totalSum - intSum;

    return missingNumber;
}
const int = [1,2,4,5];
const N = 5;
const findInt = missingNumber(int , N);
console.log("The missing number is:" , findInt);

// Implement a function to convert a decimal number to its binary representation.
function convertBinary (decimal){
    if(decimal === 0)return '0';
    
    let binary = '';
    while (decimal > 0){
        binary = (decimal % 2) + binary;
        decimal = Math.floor(decimal / 2);
    }
    return binary;
}
const decimal = 10;
const binary = convertBinary (decimal);
console.log(binary);

// Implement a function that returns the longest word in a sentence.

function findWord (sentence){
    const words = sentence.split(' ');
    
    let longestWord = ' ';
    let maxLength = 0;
    
    for(const word of words){
        const cleanWord = word.replace(/[^\w]/g,' ');
        if(cleanWord.length > maxLength){
            longestWord = cleanWord;
            maxLength = cleanWord.length;
        }
    }
    return longestWord;
}
const sentence = 'im a future Fullstackdeveloper';
const finalOutput = findWord(sentence);
console.log(finalOutput);

// Given a matrix (2D array), rotate it 90 degrees clockwise

function rotate (degree){
    for (let i=0; i< degree.length; i++){
        for(let j=0; j< degree.length; j++){
            const matrix = degree[i][j];
            degree[i][j] = degree[j][i];
            degree[j][i] = matrix;
        }
    }
    for (let i=0; i< degree.length; i++){
        degree[i].reverse ();

    }
    return degree;
}
const degree = [
    [1,4,6],
    [6,8,9],
    [5,7,2]
]
const findingRotate = rotate (degree);
console.log(findingRotate);

// 9.Write a function that generates all possible combinations of a given string.

function possibleGenerates (string){
    const result = [];
    function backtrack(combination,start){
        result.push(combination);
        for(let i = start; i< string.length;i++){
            const newCombination = combination + string[i];
            backtrack(newCombination, i+1);
        }
    }
    backtrack('',0);
    return result;
}
const stringValue = 'xyz';
const findPossibleGenerates = possibleGenerates(stringValue);
console.log(findPossibleGenerates);

