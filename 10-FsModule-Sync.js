const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./context/first.txt','utf8')
const second = readFileSync('./context/second.txt','utf8')


writeFileSync('./context/result-sync.txt',`Here is the result ${first}, ${second}`) //auto create result-sync.txt file

console.log(first,second)