import app from "./app";

/**
 * Start Express server.
 */
const server = app.listen(app.get("port"), () => {
    if (process.env.NODE_ENV === 'development') {
        console.log(
            "  App is running at http://localhost:%d in %s mode",
            app.get("port"),
            app.get("env")
        );
        console.log("  Press CTRL-C to stop\n");
    }
});

export default server;
