//This programs add.js and subtract.js and import these files to calculator.
const add = require("./add.js");
const sub = require("./sub.js")
const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question(`add|sub`, number => {
    const args = process.argv.slice(2)
    const a = parseFloat(args[0])
    const b = parseFloat(args[1])
    if (number === 'add'){
       console.log(`${a} + ${b} = ${add(a,b)}`) 
    }
    else if (number === 'sub') {
        console.log(`${a} - ${b} = ${sub(a,b)}`) 
    }
    else{
        console.log("Unknown operator")
    }
    readline.close();
})
