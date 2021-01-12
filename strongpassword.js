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

// Complete the minimumNumber function below.
function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    var diff = 0;    
    var countdigit = 0;    
    var countspecial = 0;    
    var countL = 0;    
    var countU = 0;    
    var total = 0;    
    for(var i =0; i < n; i++){        
        if(password[i] >= 'A' && password[i] <= 'Z'){            
            countU++;       
        }        
        else if(password[i] >= 'a' && password[i] <= 'z') {     
            countL++;     
        }        
        else if (password[i] >= '0' && password[i] <= '9'){           
            countdigit++;        
        }              
        else{            
            countspecial++;        
        }    
    }    
    if(n >= 6 && countU >= 1 && countL >= 1 && countdigit >= 1 && countspecial >= 1){        
        return 0 ;    
    }    
    else{        
        if(countU < 1){            
            total++;        
        }        
        else if(countL < 1){            
            total++;        
        }        
        else if(countdigit < 1){            
            total++;        
        }        
        else if(countspecial < 1){            
            total++;        
        }        
        else{            
            total++;       
        }    
    }    
    return (total );    
    if(total + n >= 6){        
        //return total;        
        //SEEMS LIKE THIS IS NOT WORKING        
       //WHY IS IT RETURNING TOTAL AS 1 IN THE CASE OF 4, 4700 instead of 3        //ISSUE WITH HOW I AM GETTING THE TOTAL        
       //MY CURRENT SOLUTION ONLY WORKS IF 1(ONE) EITHER lowercase/uppercase/digit/special character IS MISSING        
       //WHAT ABOUT WHEN THE PASSWORD IS MISSING(MORE THAN ONE lowercase/uppercase/digit/special character)? DO I NEED A FOR LOOP?   
    }    
    else{        
        diff = 6 - (total + n) ;       
        return (total + diff);    
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const password = readLine();

    let answer = minimumNumber(n, password);

    ws.write(answer + "\n");

    ws.end();
}
