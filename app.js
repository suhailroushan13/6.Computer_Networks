import http from 'http'
import https from 'https'
import fs from 'fs'

const httpPort = 80, httpsPort = 443

const httpsServerOptions = {
    'key': fs.readFileSync('./https/privkey.pem'),
    'cert': fs.readFileSync('./https/cert.pem')
}

// Creating http server
let httpServer = http.createServer((req, res) => {
    res.end(`<h1>HTTP <br>Port No : 80</h1>   <style>
body {
  background-color: linen;
}

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>`);
})

// Creating https server
let httpsServer = https.createServer(httpsServerOptions,(req, res) => {
    res.end(`<h1>HTTPS <br>Port No : 443</h1>   <style>
body {
  background-color: white;
}

h1 {
  color: green;
  margin-left: 40px;
}
</style>`)
})

// Listening server at HTTPS port
httpsServer.listen(httpsPort, () => {
    console.log(`Listening server on port ${httpsPort}`)
})

// Listening server at HTTP port
httpServer.listen(httpPort, () => {
    console.log(`Listening server on port ${httpPort}`)
})