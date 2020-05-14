import app from "./app";

const server = require("http").Server(app);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = require("socket.io")(server, {
    handlePreflightRequest: (_: any, res: any) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": 3000, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }});

app.set("io", io);
require("./sockets/index");

/**
 * Start Express server.
 */
server.listen(1234, () => {
    if (process.env.NODE_ENV === "development") {
        console.log(" 🚀 App is running at http://localhost:1234");
        console.log(" Press CTRL-C to stop\n");
    }
});

export default server;
