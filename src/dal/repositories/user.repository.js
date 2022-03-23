const { User } = require('../entities');

class UserRepository {

    constructor() {
    }

    async getUsers() {
        
        const querySpec = {
            query: 'SELECT * from c'
        };

        // read all items in the Items container
        const container = await User();
        const { resources: items } = await container.items
            .query(querySpec)
            .fetchAll();

        return items;
    }

    async getUsersById() {
        
        const container = await User();
        const { resources: items } = await container.item('id').read();

        return items;
    }

    async createUser(item) 
    {
        const container = await User();
        const { resources: createdItem } = await container.items.create(item)

        return createdItem;
    }
}

module.exports = UserRepository;