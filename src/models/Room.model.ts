import mongoose from "mongoose";

export type RoomDocument = mongoose.Document & {
    name: string;
};

const roomSchema = new mongoose.Schema({
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

export const Room = mongoose.model<RoomDocument>("Room", roomSchema);
