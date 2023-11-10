import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('cloudbeaver.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, login TEXT, password TEXT, create_timestamp DATETIME, update_timestamp DATETIME)');
});
