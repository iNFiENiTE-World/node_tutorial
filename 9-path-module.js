// Important for different machines of OS to operate due to different pathing
// e.g separators '/' && '\'
const path = require('path')

console.log(path.sep)

const filepath = path.join('/content/','subfolder','test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve('content', 'subfolder', 'test.txt')
console.log(absolute);