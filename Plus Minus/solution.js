'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    const lengthArr = arr.length
    let negative = 0;
    let positive = 0;
    let zero = 0
    
    arr.forEach((numb) => {
        if (numb > 0){
            positive += 1
        }else if(numb < 0) {
            negative += 1
        } else {
         zero += 1   
        }
    })
    
    const proportionOfPositive = positive / lengthArr
    const proportionOfNegative = negative / lengthArr
    const proportionOfZeros = zero / lengthArr
    
    console.log(`${proportionOfPositive.toFixed(6)}`)
    console.log(`${proportionOfNegative.toFixed(6)}`)
    console.log(`${proportionOfZeros.toFixed(6)}`)

}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
