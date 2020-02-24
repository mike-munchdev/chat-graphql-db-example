'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('channelStatuses', [
      {
        status: 'Open'
      },
      {
        status: 'Closed'
      },
      {
        status: 'Pending'
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('channelStatuses', null);
  }
};
