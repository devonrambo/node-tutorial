const {readFileSync, writeFileSync} = require('fs')

// same as
//  const fs = require('fs')
//  fs.readFileSync

const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second)

// first arguemtn is the path, second is what you want to be written, the third is optional and can append rather than overwrite

writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`,
{flag: 'a'})


