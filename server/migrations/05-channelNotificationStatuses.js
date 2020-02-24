'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'channelNotificationStatuses',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        status: {
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
        tableName: 'channelNotificationStatuses',
        timestamps: false
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelNotificationStatuses');
  }
};
