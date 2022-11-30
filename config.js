const config = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: "db-rest",
      port: 3306,
      user: "root",
      password: "root",
      database: "rest_database",
    },
};
module.exports = config;