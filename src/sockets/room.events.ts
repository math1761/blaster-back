import app from '../app';
import {namespaces} from './namespaces';
import logger from '../util/logger';

const io = app.get('io');

const room = io.of(namespaces.room);

room.on('connection', () => {
    console.log('coucou !')
});

room.on('REQUEST_ROOM_ID', async (room: any) => {
    const id = Math.round(Math.random() * 10);
    logger.info(`io: REQUEST_ROOM_ID -> id : ${id}`);
    logger.warn(room);
    // const newRoom = new Room({
    //     id
    // });
    // await newRoom.save();

    room.emit('GET_ROOM_ID', {
        type: 'ROOM_ID',
        data: {
            id
        }
    });
});