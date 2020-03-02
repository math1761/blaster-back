import app from '../app';
import Sequelize from 'sequelize';
import {User} from './User.model';

const sequelize = app.get('sequelize');
export const Room = sequelize.define('room', {
    names: {
        type: Sequelize.STRING
    }
});

Room.hasMany(User, {foreignKey: 'uid'});