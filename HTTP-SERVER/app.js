import http from "http";
import https from "https";

const httpPort = 5000; //


let httpServer = http.createServer((req, res) => {
  res.end("Hello I am From HTTP Server");
});


httpServer.listen(httpPort, () => {
  console.log(`SERVER STARTED AT `, httpPort);
});

