import http from "http";
import https from "https";
import fs from "fs";

const httpPort = 80;
const httpsPort = 443;





const httpsServerOptions = {
  key: fs.readFileSync("./https/privkey.pem"),
  cert: fs.readFileSync("./https/cert.pem"),
};

let httpServer = http.createServer((req, res) => {
  res.writeHead(301, { Location: "https://" + req.headers["host"] + req.url });
  res.end();
});


let httpsServer = https.createServer(httpsServerOptions, (req, res) => {
  res.end(`
  <h1>Hey I am Suhail Roushan </h1>
   
    `);
});


httpServer.listen(httpPort, () => {
  console.log(`SERVER STARTED AT `, httpPort);
});

httpsServer.listen(httpsPort, () => {
  console.log(`SERVER STARTED AT `, httpsPort);
});