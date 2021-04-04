let config = {
    port: process.env.PORT || 3000,
    filename: process.env.FILENAME || '',
    mongoDB: {
        user: process.env.USER_NAME,
        password: process.env.PASSWORD
    }
};

module.exports = config;