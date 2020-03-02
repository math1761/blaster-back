import app from '../app';
import Sequelize from 'sequelize';
import {Room} from './Room.model';

const sequelize = app.get('sequelize');
export const User = sequelize.define('user', {
    names: {
      type: Sequelize.ARRAY(Sequelize.STRING)
    }
});
