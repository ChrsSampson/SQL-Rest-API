'use strict';
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    class Course extends Sequelize.Model {}
    Course.init({
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        estimatedTime: {
            type: Sequelize.STRING,
        },
        materialsNeeded: {
            type: Sequelize.STRING,
        },
    }, { sequelize });

    // Data Association
    Course.associate = (models) => {
        Course.belongsTo(models.User, {
            foreignKey: {
                fieldName: "userId"
            }
        })
    };

    return Course;
};