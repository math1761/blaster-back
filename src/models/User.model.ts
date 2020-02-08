import mongoose from "mongoose";

export type UserDocument = mongoose.Document & {
    name: string;
};

export interface AuthToken {
    accessToken: string;
    kind: string;
}

const userSchema = new mongoose.Schema({
    names: Array
}, { timestamps: true });
export const User = mongoose.model<UserDocument>("User", userSchema);
