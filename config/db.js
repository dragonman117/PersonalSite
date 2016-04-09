var Sequelize = require('sequelize');
var sequelize = new Sequelize('personal','root','',{
    'host': '127.0.0.1',
    'dialect':'mysql',
    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

var db = {
    'Sequelize': Sequelize,
    'sequelize':sequelize
};

//Import Models
db.User = sequelize.import('../models/User.js');

//Relationships


module.exports = db;