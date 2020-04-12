import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        required: false
    },
    names: {
        type: String,
        required: false
    }
});

export const User = mongoose.model('user', UserSchema);
