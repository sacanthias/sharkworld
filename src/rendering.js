const fs = require('fs');
const matter = require('gray-matter');
const path = require('path');
const ejs = require('ejs');

let data;
const folderPath = './base';
const files = fs.readdirSync(folderPath).map(fileName => `${folderPath}/${fileName}`);

console.log(files);

// pseudocode
files.forEach(post => {
    // get actual file from the path
    if(path.extname(post) == '.md'){
        try {
            // using gray-matter to read & parse contents of the md file 
            data = matter.read(post);
            console.log(data);
            
        } catch (err) {
            console.error(err);
        }
    }
    else{
        console.log(`The file ${post} is not a Markdown file.`)
    }
});
// profit
