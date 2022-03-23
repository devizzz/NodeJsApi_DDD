const { toDomainEntity } = require('../domain/mappers');
const { toDbEntity } = require('../dal/mappers');

class UserService {

    constructor({UsersRepository}){
        this._usersRepository = UsersRepository;
    }

    async getUsers()
    {
        const users = await this._usersRepository.getUsers();
        return users;
    }

    async createUser(user){
        user = toDbEntity(user);
        const createdUser = await this._userRepository.createUser(user);
        return createdUser;
    }
}

module.exports = UserService;