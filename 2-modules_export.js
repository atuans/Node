//modules 
// const peter = 'peter';
// const john = 'john';


//first, we need to import value from 4-names.js

const names = require('./4-names');
console.log(names);

const greet = require('./5-utils');

// const sayHi = (name) =>{
//     console.log(`Hello  ${name}`)
// }

// sayHi('susan');

console.log(greet('Tuan'));
greet(names.john); //greet(john) will not defined
