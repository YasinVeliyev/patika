const http = require("http");

let html = (h2) => `<!DOCTYPE html>
    <html lang="tr">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    <h2>${h2}</h2>
    </body>
    </html>`;

let server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    if (req.url == "/index") {
        res.write(html("Index sayfasına hoşgeldiniz"));
        res.end();
    } else if (req.url === "/hakkimda") {
        res.write(html("Hakkimda sayfasına hoşgeldiniz"));
        res.end();
    } else if (req.url === "/iletisim") {
        res.write(html("Iletişim sayfasına hoşgeldiniz"));
        res.end();
    }
});

server.listen(5000, () => {
    console.log("Server is running port 5000");
});
