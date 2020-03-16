import mongoose from 'mongoose';

const RoomSchema = new mongoose.Schema({
    roomId: {
        type: Number,
        required: false
    }
});
export const Room = mongoose.model('room', RoomSchema);
