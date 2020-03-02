import app from '../app';
import {namespaces} from './namespaces';
import logger from '../util/logger';
import {Room} from '../models/Room.model';

const io = app.get('io');

const room = io.of(namespaces.room);

room.on('connection', () => {
    console.log('coucou !');
    room.on("REQUEST_ROOM_ID", async (room: any) => {
        const id = (Math.round(Math.random() * 10)).toString(10);
        const newRoom = await Room.create({name: id});
    
        await logger.info(`io: REQUEST_ROOM_ID -> id : ${newRoom.id}`);
        await logger.warn(newRoom.id);
    
        io.emit('GET_ROOM_ID', {
            type: 'ROOM_ID',
            data: {
                id: newRoom.id
            }
        });
    });
});