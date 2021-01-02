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

// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s) {     
    var index = [];   
    var s_reverse = s.split("").reverse().join("");      
    if(s == s_reverse){     
        return 0;    
    }      
    else{            
        var max = 'A';            
        for(var i=0; i <s.length; i++){                  
            if(s.charAt(i) > max){                        
                max = s.charAt(i);                 
            }           
        }           
        return max;    
        for(var i = 0; i < s.length; i++){        
            if(s[i] == max){           
                 index.push[i];
                //TRYING TO GET THE INDEX OF THE HIGHEST CHARACTER       
            }    
        }   
        console.log(index);  
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = theLoveLetterMystery(s);

        ws.write(result + "\n");
    }

    ws.end();
}
