import http from "http";
import https from "https";
import fs from "fs";
// const httpPort = 80;
// const httpsPort = 443;
const five = 8080;
const six = 1234;
const seven = 5555;

// const httpsServerOptions = {
//   key: fs.readFileSync("./https/privkey.pem"),
//   cert: fs.readFileSync("./https/cert.pem"),
// };

// let httpServer = http.createServer((req, res) => {
//   res.end("Hello");
// });

let fivethousand = http.createServer((req, res) => {
  res.end("Hello I am From 8080 Server 1");
});
// let sixthousand = http.createServer((req, res) => {
//   res.end("Hello I am From 1234 Server 2");
// });
// let seventhousand = http.createServer((req, res) => {
//   res.end("Hello I am From 5555  Server 3");
// });

// let httpsServer = https.createServer(httpsServerOptions, (req, res) => {
//   res.end(`
//     <h1>SUHAIL</h1>
    
//     `);
// });

// httpServer.listen(httpPort, () => {
//   console.log(`SERVER STARTED AT `, httpPort);
// });



fivethousand.listen(five, () => {
    console.log(`SERVER STARTED AT `, five);
});

// sixthousand.listen(six, () => {
//     console.log(`SERVER STARTED AT `, six);
// });

// seventhousand.listen(seven, () => {
//     console.log(`SERVER STARTED AT `, seven);
// });

    
// httpsServer.listen(httpsPort, () => {
//   console.log(`SERVER STARTED AT `, httpsPort);
// });

// httpServer.listen(five, () => {
//   console.log(`SERVER STARTED AT `, five);
// });
