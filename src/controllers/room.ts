import {APIType} from '../types/express-flash';
export const createRoom = ({req, res}: APIType) => {
    console.log(res.json({
        res: 'OK'
    }));
}