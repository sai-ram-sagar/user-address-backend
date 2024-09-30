const User = require('./User');
const Address = require('./Address');

// Define a one-to-many relationship (User to Address)
User.hasMany(Address, { foreignKey: 'userId' });
Address.belongsTo(User, { foreignKey: 'userId' });

module.exports = { User, Address };
