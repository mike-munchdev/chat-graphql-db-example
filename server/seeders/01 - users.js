'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        userName: 'user1',
        email: 'user1@gmail.com',
        active: true
      },
      {
        userName: 'user2',
        email: 'user2@gmail.com',
        active: true
      },
      {
        userName: 'user3',
        email: 'user3@gmail.com',
        active: true
      }
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  }
};
