const { readFileSync, writeFileSync } = require('fs')
console.log('START');

// File will be created if not exist
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first, second);

// default 'OVERWRITE'
// use flag 'a' for append instead
writeFileSync('./content/result-sync.txt', `Result of SYNCHRONOUS write function (2 run) ${first} ${second}`, { flag: 'a'})

console.log('TASK DONE!!!');
console.log('NEXT TASK!!!');