const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const Post = sequelize.define('Post', {
        postID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        }, 
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        topic:{
            type: DataTypes.UUID,
            allowNull: false,
            references: {
                model: 'Topics',
                key: 'topicID'
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

    return Post

}