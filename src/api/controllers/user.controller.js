class UserController {

    constructor({UserService}){
        this._userService = UserService;
    }

    sayHello(req, resp) {
        return resp.send({message: "Hello world"});
    }

    async getUsers(req, resp){
        const response = await this._userService.getUsers();
        return resp.send(response);
    }
}

module.exports = UserController;