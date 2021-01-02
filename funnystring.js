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

// Complete the funnyString function below.
function funnyString(s) {
    var s_reverse = s.split("").reverse().join("");    var s_reverse_code = [];    
    var s_reverse_code_diff = [];    
    var s_code = [];        
    var s_code_diff = [];        
    for(var i = 0; i <= s_reverse.length-1; i++){                
        s_reverse_code.push(s_reverse.charCodeAt(i));       
    }    
    
    for(var i = 0; i <= s.length-1; i++){                
        s_code.push(s.charCodeAt(i));       
    }     
            
    for(var i = 0; i < s_reverse_code.length -1; i++){                    
        s_reverse_code_diff.push(Math.abs(s_reverse_code[i] - s_reverse_code[i + 1])) ;    }   
    
    for(var i = 0; i < s_code.length -1; i++){                    
        s_code_diff.push(Math.abs(s_code[i] - s_code[i + 1])) ;        
    }      
    
    if(JSON.stringify(s_code_diff)==JSON.stringify(s_reverse_code_diff)) {
        return "Funny";
    }
    else{
        return "Not Funny";
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = funnyString(s);

        ws.write(result + "\n");
    }

    ws.end();
}