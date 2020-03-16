import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    names: {
        type: String,
        required: false
    }
});
export const User = mongoose.model('room', UserSchema);
