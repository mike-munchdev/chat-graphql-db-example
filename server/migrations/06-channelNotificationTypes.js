'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'channelNotificationTypes',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        type: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true
        },
        slug: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true
        }
      },
      {
        tableName: 'channelNotificationTypes',
        timestamps: false
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelNotificationTypes');
  }
};
