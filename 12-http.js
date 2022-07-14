const http = require('http')

const server = http.createServer((req, res) => {
    // console.log(req);

    if (req.url === '/') {
        res.end('Welcome to my node-servered page')
        return
    }
    if (req.url === '/about') {
        res.end('This is an about page')
        return
    }
    res.end(
        `<h1>Oops! This page doesn't exist!</h1>
         <a href='/'>Consider back to homepage</a>`
    )
})

server.listen(5000)