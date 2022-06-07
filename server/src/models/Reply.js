const { DataTypes } = require("sequelize");

module.exports = ( sequelize ) => {
    const Reply = sequelize.define('Reply', {
        replyID: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false
        }, 
        post: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Posts',
                key: 'postID'
            }
        },
        user:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Users',
                key: 'userID'
            }
        }
    })

    return Reply
}