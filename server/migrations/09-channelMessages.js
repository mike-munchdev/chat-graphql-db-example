'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        'channelMessages',
        {
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          text: {
            type: Sequelize.TEXT,
            allowNull: false
          },
          userId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          channelId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'channels',
              key: 'id'
            }
          },
          dateSent: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          channelMessageStatusId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'channelMessageStatuses',
              key: 'id'
            }
          }
        },
        {
          tableName: 'channelMessages',
          timestamps: false
        }
      )
      .then(() =>
        queryInterface.addIndex('channelMessages', ['userId'], {
          name: 'idxChannelMessagesUserId',
          method: 'BTREE'
        })
      )
      .then(() =>
        queryInterface.addIndex('channelMessages', ['channelId'], {
          name: 'idxChannelMessagesChannelId',
          method: 'BTREE'
        })
      );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelMessages');
  }
};
