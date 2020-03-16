import app from '../app';
import {namespaces} from './namespaces';
import logger from '../util/logger';
import {Room} from '../models/Room.model';

export const roomSocketEvents = () => {
    const io = app.get('io');

    const roomSocket = io.of(namespaces.room);
    let roomId = 0;

    roomSocket.on('connection', (socket: any) => {
        console.info(`socket-io room: connected`);

        socket.on('SOCKET/REQUEST_ROOM_ID', async () => {
            roomId = Math.round(Math.random() * 10);
            await new Room({roomId}).save();

            logger.info(`io: REQUEST_ROOM_ID -> id : ${roomId}`);
        
            socket.broadcast.emit('SOCKET/GET_ROOM_ID', roomId);
        });

        socket.on('disconnect', async () => {
            logger.info(`room: disconnected: REQUEST_ROOM_ID -> id : ${roomId}`);
            await Room.deleteOne({roomId});
            console.log('socket-io ');
        });
    });
}