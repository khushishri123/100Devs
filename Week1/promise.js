const fs = require('fs');
const fsPromises = require('fs').promises;

// Callback-based
function fileContent(err, content) {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }
    console.log("Completed..., content: ", content);
}

fs.readFile('/Users/consultadd/Documents/Javascript Practice/100Devs/Week1/a.txt', 'utf-8', fileContent);

// Promise-based


fsPromises.readFile('/Users/consultadd/Documents/Javascript Practice/100Devs/Week1/a.txt', 'utf-8')
    .then(content => {
        console.log("Completed..., content: ", content);
    })
    .catch(err => {
        console.error("Error reading file:", err);
    });
