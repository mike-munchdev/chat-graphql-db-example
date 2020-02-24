'use strict';
require('./server/config/config');

const express = require('express');

const { migrateDatabase } = require('./server/utils/migrateDatabase');
const { seedDatabase } = require('./server/utils/seedDatabase');
(async () => {
  // initialize server
  const app = express();

  const ipaddr = process.env.IP || 'localhost';
  const PORT = Number(process.env.PORT) || 4001;

  app.listen({ port: PORT }, async () => {
    console.log(`🚀 Server ready at http://${ipaddr}:${PORT}`);
    // migrate and seed database and add initial user
    (async () => {
      await migrateDatabase();
      await seedDatabase();
      process.exit();
    })();
  });
})();
