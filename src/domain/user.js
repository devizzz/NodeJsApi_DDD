const { attributes } = require("structure");

const User = attributes({
    name: {
        type: String,
        require: true
    },
    lastname: {
        type: String
    }
})(class User{
    getFullName(){
        return `${this.name} ${this.lastname}`;
    }
});

module.exports = User;