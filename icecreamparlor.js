'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {
    var total = 0;
    for(var i = 1; i <= arr.length; i++){
        var j = i + 1;
        while(j > arr.length){
            total = arr[i] + arr[j];
            if(total == m){
                //return i,j;
                console.log(i);
                console.log(j);
            }
        }
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const m = parseInt(readLine(), 10);

        const n = parseInt(readLine(), 10);

        const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

        let result = icecreamParlor(m, arr);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
