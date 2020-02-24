'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface
      .createTable(
        'channelLastViewed',
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
          lastViewedAt: {
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
          }
        },
        {
          tableName: 'channelLastViewed',
          timestamps: false
        }
      )
      .then(() =>
        queryInterface.addIndex('channelLastViewed', ['userId'], {
          name: 'idxChannelLastViewedUserId',
          method: 'BTREE'
        })
      )
      .then(() =>
        queryInterface.addIndex('channelLastViewed', ['channelId'], {
          name: 'idxChannelLastViewedChannelId',
          method: 'BTREE'
        })
      );
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('channelLastViewed');
  }
};
