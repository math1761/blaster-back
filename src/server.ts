import app from "./app";

const server = require('http').createServer(app);
const io = require('socket.io')(server);
/**
 * Start Express server.
 */
server.listen(1234, () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(" 🚀 App is running at http://localhost:1234");
        console.log(" Press CTRL-C to stop\n");
    }
});

app.set("io", io);

export default server;
