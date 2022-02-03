import {PASSWORD} from '../data/index';
const Sequelize = require("sequelize");


const sequelize =  new Sequelize("PASSWORD", "root", "root", {
    dialect: "mysql",
    host: "localhost"
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize : sequelize,
    notes : Notes
}