import app from '../app';
import {isNil} from 'ramda';
import {namespaces, events} from './namespaces';
import logger from '../util/logger';
import {Room} from '../models/Room.model';
import {User} from '../models/User.model';

export const roomSocketEvents = () => {
    const io = app.get('io');

    const roomSocket = io.of(namespaces.room);
    let roomId = 0;

    roomSocket.on('connection', (socket: any) => {
        console.info(`socket-io room: connected`);

        socket.on(events.REQUEST_ROOM_ID, async () => {
            roomId = Math.round(Math.random() * 10);
            await new Room({roomId}).save();

            logger.info(`io: ${events.REQUEST_ROOM_ID} -> id : ${roomId}`);
        
            socket.broadcast.emit(events.GET_ROOM_ID, roomId);
        });

        socket.on(events.IS_PSEUDO_AVAILABLE, async ({pseudo}: {pseudo: string}) => {
            const user = await User.findOne({pseudo});
            isNil(user) && socket.broadcast.emit(events.IS_PSEUDO_AVAILABLE_STATUS, true);
        });

        socket.on('disconnect', async () => {
            if (roomId) {
                logger.info(`room: disconnected: ${events.REQUEST_ROOM_ID} -> id : ${roomId}`);
                await Room.deleteOne({roomId});
            }
        });
    });
}