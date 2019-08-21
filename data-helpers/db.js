const { Client } = require('pg');

const client = new Client({
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST
});

client.connect(() => {
  console.log('connected to db');
});

module.exports = client;
