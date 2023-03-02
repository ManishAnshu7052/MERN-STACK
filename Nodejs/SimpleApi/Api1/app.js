const http = require("http");
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "applicationjson" });
    res.write(
      JSON.stringify({
        name: "Manish kumar patel",
        email: "patelmanish5272@gmail.com",
        address: "Allahabad",
      })
    );
    res.end();
  })
  .listen(5000);
