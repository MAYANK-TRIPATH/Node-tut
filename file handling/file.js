// File Handling as a name suggest to handle the file in the program using
//  various func and operations. eg. read, write, delete, append, overwrite, access so on. 

const fs = require("fs");

// Sync
fs.writeFileSync("./test.txt", "Hello world");

//Async
fs.writeFile("./test.txt", "Hello Async", (err) => {});

// Reading files
const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);

// Reading files Async 
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        consolr.log("Error", err);
    } else {
        console.log(result);
    }
});


// There are many operation in fs. function
// appendFileSync, cpSync, unLinkSync, mkdir, statSync and so on. 