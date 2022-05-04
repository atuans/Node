const http = require('http')

const server = http.createServer((req,res) =>{
    // req mean request from client
    // res mean respond from server
    // res.write('Welcome')
    // res.end()


    if(req.url === '/'){
        res.end('Welcome to our homepage')
    }
    else if(req.url === '/about'){
        res.end('This is about page')
    }
    else{
    res.end(`<h1>Seem like we cant found the page you looking for</h1>
    <a href="/">Back Home</a> `)
    }
})

server.listen(5000) // this mean create a localhost on porn 5000