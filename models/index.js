const User = require('./user');
const Favorite = require('./favorite');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
module.exports = { User, Favorite };