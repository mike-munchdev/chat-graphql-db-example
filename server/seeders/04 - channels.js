'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('channels', [
      {
        name: 'general',
        channelTypeId: 1,
        channelStatusId: 1
      },
      {
        name: 'random',
        channelTypeId: 2,
        channelStatusId: 1
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('channels', null);
  }
};
