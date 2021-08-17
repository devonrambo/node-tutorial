const path = require('path')


// return my platform specific seperator
console.log(path.sep)

// join a sequence of path segments
// return a normalized resulting path


const filePath = path.join('/content/', '//subfoler', 'test.txt');

console.log(filePath);

// grab the base (file)

const base = path.basename(filePath);
console.log(base)

// grab the path from the very top
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)

