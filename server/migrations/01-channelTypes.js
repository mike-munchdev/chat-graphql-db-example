'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'channelTypes',
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
        }
      },
      {
        tableName: 'channelTypes',
        timestamps: false
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelTypes');
  }
};
