// Modules
// CommonJS - every file is module by default
// Modules - Encapsulated Code (only share minimum)
const {h, a} = require('./4-name') // Important pathname format ('./', '', '../')
// console.log(names);
const saySomething = require('./5-module')
const data = require('./6-alt-flavour')
require('./7-mind-grenade')

console.log(data);
saySomething(h)
saySomething(a)