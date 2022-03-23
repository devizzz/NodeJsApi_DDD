module.exports = {
    PORT: process.env.PORT,
    DB: {
        endpoint: "https://db-cosmos-lumni.documents.azure.com",
        //key: "mysecretpassword"
        //key: process.env.DB_KEY
        key: "aYEc8zXkjh58VjrwuyBbNdgHHkidxwoeIZFwMqUJVOqz32AuCbQgaSlWgMXVunRdHMqt6t70R5fr70bwQdlkbQ==",
        databaseId: "LumniDev",
        entities: {
            user: "test"
        }
    }
};