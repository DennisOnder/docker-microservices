module.exports = {
  PORT: process.env.PORT || 9001,
  SECRET_OR_KEY: process.env.SECRET_OR_KEY || "secret",
  ENV: process.env.NODE_ENV || "development",
  DB_PORT: process.env.DB_PORT || 27017
};
