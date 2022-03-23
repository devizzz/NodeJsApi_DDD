const { DB } = require('../../config/env');
const DbContext = require('../dbcontext');

const User = async () => {

    const nameEntity = DB.entities.user;

    const container = await DbContext(nameEntity);

    return container;
}

module.exports = User;