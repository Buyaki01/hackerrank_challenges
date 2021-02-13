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

// Complete the minimumDistances function below.
function minimumDistances(a) {
    var d_min = [];
    for(var i = 0; i < a.length - 1; i++){
        for(var j=0; j < a.length; j++){
            if(a[i]==a[j]){
                var diff = Math.abs(j-i);
                if(diff > 0){
                    d_min.push(diff);
                } 
                
            }
        }
    }
    console.log(d_min);
    if(d_min.length =0){
    }
    //Why is -1 not being displayed?
    else{
        console.log(Math.min(d_min));
    }
    //Why is the smallest element in the array not being displayed?
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = minimumDistances(a);

    ws.write(result + "\n");

    ws.end();
}
