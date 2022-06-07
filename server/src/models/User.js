const { DataTypes } = require("sequelize");


const Promise = require("bluebird")
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))



function hashPassword(user, options){
    
    if(!user.changed('password')){
        return;
    }
    const SALT_FACTOR = 10;
    
    return bcrypt.genSaltAsync(SALT_FACTOR).then(salt => bcrypt.hashAsync(user.password, salt, null)).then(hash =>{
        user.setDataValue('password', hash)
    })
    

}


module.exports = ( sequelize ) => {
    const User = sequelize.define( 'User', {
        userID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }, 
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true

        },
        password: {
            type: DataTypes.STRING, 
            allowNull: false
        },
        bio: DataTypes.TEXT,
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    }, {
        hooks: {
            beforeSave: hashPassword
        }
    }
    );

    User.prototype.comparePassword = function (pass) {
        return bcrypt.compareAsync(pass, this.password);
    }
    return User;
}