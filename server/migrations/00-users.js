'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'users',
      {
        id: {
          type: Sequelize.INTEGER(11),
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
        },
        email: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true
        },
        userName: {
          type: Sequelize.STRING(255),
          allowNull: false,
          unique: true
        },
        active: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false
        }
      },
      {
        tableName: 'users',
        timestamps: false
      }
    );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('users');
  }
};
