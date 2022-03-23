const { User } = require('../user');

module.exports = {
    toDomainEntity(User){
        const { id, name, lastname } = user;
        return new User({ id, name, lastname });
    }
};