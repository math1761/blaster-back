import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(1234, () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(" 🚀 App is running at http://localhost:1234");
        console.log(" Press CTRL-C to stop\n");
    }
});

export default server;
