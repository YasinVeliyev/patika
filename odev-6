const Koa = require("koa");
const app = new Koa();

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

app.use(async (ctx) => {
    if (ctx.request.url === "/index") {
        ctx.body = html("Index sayfasına hoşgeldiniz");
    } else if (ctx.request.url === "/hakkimda") {
        ctx.body = html("Hakkimda sayfasına hoşgeldiniz");
    } else if (ctx.request.url === "/iletisim") {
        ctx.body = html("Iletişim sayfasına hoşgeldiniz");
    }
});

app.listen(3000);
