import app from '../app';
import {namespaces} from './namespaces';
import Room from '../models/Room.model';

const io = app.get('io');

const room = io.of(namespaces.room);

room.on('REQUEST_ROOM_ID', async (room) => {
    const id = Math.round(Math.random() * 10);
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