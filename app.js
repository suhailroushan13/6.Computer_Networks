import http from 'http'
import https from 'https'
import fs from 'fs'

const httpPort = 80, httpsPort = 443

const httpsServerOptions = {
    'key': fs.readFileSync('./https/key.pem'),
    'cert': fs.readFileSync('./https/cert.pem')
}

// Creating http server
let httpServer = http.createServer((req, res) => {
    res.end(`<h1>hey there from HTTP Mai Http se hu</h1>`)
})

// Creating https server
let httpsServer = https.createServer(httpsServerOptions,(req, res) => {
    res.end(`<h1>hey there from HTTPS..Mai Secure hu  </h1>`)
})

// Listening server at HTTPS port
httpsServer.listen(httpsPort, () => {
    console.log(`Listening server on port ${httpsPort}`)
})

// Listening server at HTTP port
httpServer.listen(httpPort, () => {
    console.log(`Listening server on port ${httpPort}`)
})