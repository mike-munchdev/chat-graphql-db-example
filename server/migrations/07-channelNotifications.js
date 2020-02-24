'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        'channelNotifications',
        {
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          notifiedByUserId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          notifiedUserId: {
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
          notificationStatusId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'channelNotificationStatuses',
              key: 'id'
            }
          },
          notificationTypeId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'channelNotificationTypes',
              key: 'id'
            }
          },
          linkId: {
            type: Sequelize.INTEGER(11),
            allowNull: true
          },
          rejectedReason: {
            type: Sequelize.TEXT,
            allowNull: true
          },
          message: {
            type: Sequelize.STRING(255),
            allowNull: false
          }
        },
        {
          tableName: 'channelNotifications',
          timestamps: false
        }
      )
      .then(() =>
        queryInterface.addIndex('channelNotifications', ['notifiedByUserId'], {
          name: 'idxChannelNotificationsNotifiedByUserId',
          method: 'BTREE'
        })
      )
      .then(() =>
        queryInterface.addIndex('channelNotifications', ['notifiedUserId'], {
          name: 'idxChannelNotificationsNotifiedUserId',
          method: 'BTREE'
        })
      )
      .then(() =>
        queryInterface.addIndex('channelNotifications', ['channelId'], {
          name: 'idxChannelNotificationsChannelId',
          method: 'BTREE'
        })
      );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelNotifications');
  }
};
