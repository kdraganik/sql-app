import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {

  const db = await open({
    filename: './db.sqlite',
    driver: sqlite3.Database
  });

  db.run("CREATE TABLE IF NOT EXISTS notes (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)");

  res.status(200).json("OK");
}