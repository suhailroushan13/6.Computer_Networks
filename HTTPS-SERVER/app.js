import fs from "fs";
import http from "http";
import url from "url";
import https from "https";

const httpPort = 8080;
const httpsPort = 443;

const httpsServerOptions = {
  key: fs.readFileSync("./https/privkey.pem"),
  cert: fs.readFileSync("./https/cert.pem"),
};

let httpServer = http.createServer((req, res) => {
   res.end(`
    <h1>Hey There from Prash (http - encrypted)</h1>
    <h2>
        <script>
             
            document.write(new Date());
         
            document.write(document.URL);
        </script>
    </h2>
    `);
});

let httpsServer = https.createServer(httpsServerOptions, (req, res) => {
  res.end(`
    <h1>Hey There from Prash (https - encrypted)</h1>
    <h2>
        <script>
             
            document.write(new Date());
         
            document.write(document.URL);
        </script>
    </h2>
    `);
});

httpServer.listen(httpPort, () => {
  console.log("Server Started at PORT ", httpPort);
});

httpsServer.listen(httpsPort, () => {
  console.log("Server Started at PORT ", httpsPort);
});
