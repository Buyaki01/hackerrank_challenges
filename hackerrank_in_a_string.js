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

// Complete the hackerrankInString function below.
function hackerrankInString(s) {    
    var count_h = 0;    
    var count_a = 0;    
    var count_c = 0;    
    var count_k = 0;    
    var count_e = 0;    
    var count_r = 0;    
    var count_n = 0;    
    for(var i =0; i < s.length; i++){        
        if (s[i] == 'h'){        
            count_h++;   
        }    
        else if(s[i] == 'a'){        
            count_a++;   
        }    
        else if(s[i] == 'c'){        
            count_c++;   
        }    
        else if(s[i] =='k'){        
            count_k++;    
        }    
        else if(s[i] =='e'){        
            count_e++;  
        }    
        else if(s[i] =='r'){        
            count_r++;   
        }    
        else if(s[i] =='n'){        
            count_n++;    
        }    
        else{        
            count_h = count_h;        
            count_a = count_a;   
            count_c = count_c;        
            count_k = count_k;        
            count_e = count_e;        
            count_r = count_r;        
            count_n = count_n;    
        }    
    }    
    //round 1    
    if(count_h == 1 && count_a == 2 && count_c == 1 && count_k==2 && count_e == 1 && count_r ==2 && count_n == 1){        
        return "YES";   
    }    
    //Unable to print yes, why?    //more rounds    
    else if(count_h > 1 && count_a > 2 && count_c > 1 && count_k > 2 && count_e > 1 && count_r > 2 && count_n > 1 && count_h==count_c && count_c==count_e && count_e ==count_n && count_a  == count_k && count_k==count_r){       
        return "YES";    
    }    
    //Unable to print yes    
    else{       
        return "NO";    
    }
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = hackerrankInString(s);

        ws.write(result + "\n");
    }

    ws.end();
}
