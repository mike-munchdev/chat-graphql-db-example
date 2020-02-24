'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('channelTypes', [
      {
        type: 'Public'
      },
      {
        type: 'Private'
      },
      {
        type: 'Direct'
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('channelTypes', null);
  }
};
