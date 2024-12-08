const fs  = require('fs')

function sum (n) {
    let sum = 0
    for(let i=0;i<n;i++) {
        sum+= i
    }
    console.log(sum)
}
function fileIsRead(err,content)
{
        sum(content)
}
fs.readFile('/Users/consultadd/Documents/Javascript Practice/100Devs/Week1/chocolate.txt',"utf8", fileIsRead)
console.log("hello")
