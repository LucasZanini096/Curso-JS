const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

//fs.readdir(path.resolve(__dirname)).then(files=> console.log(files)).catch(e => console.log(e))

async function readdir() {
    rootDir = rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}

async function walk(files) {
    for(let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = await fs.stat();

        if(/\.git/g.test(fileFullPath)) continue;
        if (/node_modules/g.test(fileFullPath)) continue;

        if(stats.isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        
        if (
            !/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)
            ) continue;


        console.log(file, stats.isDirectory());
    }
}


