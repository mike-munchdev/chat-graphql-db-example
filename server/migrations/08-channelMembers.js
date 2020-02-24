'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        'channelMembers',
        {
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          userId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          channelId: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            references: {
              model: 'channels',
              key: 'id'
            }
          },
          dateJoined: {
            type: Sequelize.DATE,
            allowNull: true,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          dateLeft: {
            type: Sequelize.DATE,
            allowNull: true
          }
        },
        {
          tableName: 'channelMembers',
          timestamps: false
        }
      )
      .then(() =>
        queryInterface.addIndex('channelMembers', ['userId'], {
          name: 'idxChannelMembersUserId',
          method: 'BTREE'
        })
      )
      .then(() =>
        queryInterface.addIndex('channelMembers', ['channelId'], {
          name: 'idxChannelMembersChannelId',
          method: 'BTREE'
        })
      );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelMembers');
  }
};
