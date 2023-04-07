const User = require('./user');
const Favorite = require('./favorite');

User.hasMany(Favorite, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});
Favorite.belongsTo(User);

module.exports = { User, Favorite };