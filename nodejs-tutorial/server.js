const http = require("http");
const PORT = 8000;

// webサーバーを作ろう！
const server = http.createServer((req, res) => {
    // ブラウザからアクセスがきた時の処理
    res.writeHead(200, {"Content-Type": "text/html" });
    res.write("<h1>Hello World!</h1>");
    res.end();
});

server.listen(PORT, () => {
    console.log("Server Running!");
});