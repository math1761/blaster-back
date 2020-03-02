import app from "./app";
import {Room} from './models/Room.model';
import logger from './util/logger';

const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    handlePreflightRequest: (_:any, res:any) => {
        const headers = {
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
            "Access-Control-Allow-Origin": 3000, //or the specific origin you want to give access to,
            "Access-Control-Allow-Credentials": true
        };
        res.writeHead(200, headers);
        res.end();
    }});
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

io.on('connection', async (_: any) => {
    const id = (Math.round(Math.random() * 10)).toString(10);
    const newRoom = await Room.create({name: id});

    await logger.info(`io: REQUEST_ROOM_ID -> id : ${newRoom.id}`);
    await logger.warn(newRoom.id);
    console.log('coucou');
    io.emit('GET_ROOM_ID', {
        type: 'ROOM_ID',
        data: {
            id: newRoom.id
        }
    });
});


export default server;
