const http = require('http')
const fs = require('fs')



console.log('hello world')
const port = 3000

const server = http.createServer((req,res) => {
    res.write('hello world')
    res.end()
}).listen(port)



fs.writeFile('welcome.txt', 'hello node', (err)=>{
    console.log('created')
})

fs.readFile('welcome.txt','utf-8', (err, data) => {
    console.log(data)
})

