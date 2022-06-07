const { DataTypes } = require("sequelize");

module.exports = ( sequelize ) => {
    const Topic = sequelize.define('Topic', {
        topicID: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            unique: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    })

    return Topic
} 