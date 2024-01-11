const webInfo = require('./data.js')
const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('Request received')
    const template = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Challenge: servidor HTTP</title>
        </head>
        <body style="text-align: center">
            <h1>${webInfo.title}</h1>
            <h2><i>${webInfo.subtitle}</i></h2>
            <p>${webInfo.description}</p>
        </body>
        </html>`
    res.end(template)
})

server.listen(0, ()=> {
    console.log(`Server listening on port ${server.address().port}`)
    console.log(`http://localhost:${server.address().port}`)
})
