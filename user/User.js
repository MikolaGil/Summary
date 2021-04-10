
const connect = require('../db/db')
const userSchema = require('../db/userSchema');

class User{

    async getInfo() {

        await connect();

        return userSchema.findOne({}, function (err, user) {
            if (err) {
                console.error(err);
            }

            return user;
        });
        
    }
}

module.exports = User;