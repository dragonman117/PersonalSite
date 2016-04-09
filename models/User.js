var bcrypt = require('bcrypt-nodejs')

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('User', {
            username: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            password: {type: DataTypes.STRING },
            fbLink: {
                type: DataTypes.STRING,
                unique: false,
                allowNull:true
            },
            twLink: {
                type: DataTypes.STRING,
                unique: false,
                allowNull: true
            },
            liLink:{
                type: DataTypes.STRING,
                unique: false,
                allowNull: true
            },
            ghLink:{
                type:DataTypes.STRING,
                unique: false,
                allowNull: true
            },
            slogan:{
                type:DataTypes.STRING,
                unique:false,
                allowNull: false
            },
            phrase:{
                type:DataTypes.STRING,
                uinque: false,
                allowNull: true
            },
            about:{
                type:DataTypes.TEXT,
                allowNull: true
            }
        },
        {
            hooks: {
                beforeValidate: function(user, opt){
                    var salt = bcrypt.genSaltSync(12);
                    user.password = bcrypt.hashSync(user.password,salt);
                }
            },
            classMethods:{
                validPassword: function(pass1, pass2, done, user){
                    bcrypt.compare(pass1, pass2, function(err, isMatch){
                        if(isMatch){
                            return done(null, user);
                        }else{
                            return done(null, false);
                        }
                    });
                }
            }
        }
    );

    return User
};