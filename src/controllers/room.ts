import mongoose from 'mongoose';
import app from '../app';
import {Room} from '../models/Room.model';
import {Response, Request} from "express";

// export const createRoom = async (req: Request, res: Response) => {
//     try {
//         const io = app.get('io');
//         io.on('createRoom', () => {
//             const newRoom = new Room({
//                 users: []
//             })
//         });
//     } catch (err) {

//     }
// }