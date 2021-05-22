'use strict'
const fs = require('fs')
const loadSocketServer = require('./server')
const card = require('./card')
const ssl = !{
    http2: true,
    https: {
      allowHTTP1: true, // fallback support for HTTP1
      key: fs.readFileSync(`${__dirname}/ssl/server.key`),
      cert: fs.readFileSync(`${__dirname}/ssl/server.cert`)
    }
}

loadSocketServer(ssl).then(server => {

    const onInfo = data => {
        server.websocketServer.clients.forEach(ws => ws.send(JSON.stringify(data)))
    }
    const workStack = []
    card(onInfo, workStack)
    

    server.static(process.cwd() + '/web/index.html')
    
    // Live API here
    
    server.get('/onEvent', { websocket: true }, (connection, req, params) => {
        const ws = connection.socket
        ws.on('message', msg => {
            
        })
        ws.on('close', () => console.log(`User quit`))
    })

    server.listen(ssl ? 443 : 80, '0.0.0.0').then(addr => console.log(`server listening on ${addr}`))
})

