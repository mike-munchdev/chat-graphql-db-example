'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        'channels',
        {
          id: {
            type: Sequelize.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          name: {
            type: Sequelize.STRING(255),
            allowNull: false,
            unique: true
          },
          channelTypeId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'channelTypes',
              key: 'id'
            }
          },
          channelStatusId: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'channelStatuses',
              key: 'id'
            }
          },
          createdAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          lastModifiedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          },
          createdById: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          lastModifiedById: {
            type: Sequelize.INTEGER(11),
            allowNull: true,
            references: {
              model: 'users',
              key: 'id'
            }
          },
          hasUnreadMessages: {
            type: Sequelize.BOOLEAN,
            allowNull: true,
            defaultValue: false
          },
          lastMessageSnippet: {
            type: Sequelize.STRING(50),
            allowNull: true
          }
        },
        {
          tableName: 'channels',
          timestamps: false
        }
      )

      .then(() =>
        queryInterface.addIndex('channels', ['channelTypeId'], {
          name: 'idxChannelsChannelTypeId',
          method: 'BTREE'
        })
      )
      .then(() =>
        queryInterface.addIndex('channels', ['channelStatusId'], {
          name: 'idxChannelsChannelStatusId',
          method: 'BTREE'
        })
      );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channels');
  }
};
