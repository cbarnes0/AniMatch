const seedUsers = require('./user-seeds');
const seedFavorites = require('./favorite-seeds');

const sequelize = require('../config/connections');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');

  await seedFavorites();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
};

seedAll();