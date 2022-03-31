import http from "http";

const httpPort = 80;

let httpServer = http.createServer((req, res) => {
  res.end(`
  <h1>Hey I am Suhail Roushan </h1>
   
    `);
});

httpServer.listen(httpPort, () => {
  console.log(`SERVER STARTED AT `, httpPort);
});
