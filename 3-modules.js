// const amount = 12;

// if(amount < 10) {

// console.log('small number')
// }
// else {
//     console.log('large number')
// }

// console.log('first node app!!!')
// console.log(__filename)

// setInterval(() => {
//     console.log('hello world')
// }, 2000)

// modules
// CommonJS, every file is a module (by default)
// Modules - Encapsulated Code 

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-export');
require('./7-mind-grenade')


sayHi(names.john)
sayHi(names.peter)
console.log(data);

