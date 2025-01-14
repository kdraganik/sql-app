import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {

  const db = await open({
    filename: './db.sqlite',
    driver: sqlite3.Database
  });

  const people = await db.all("SELECT * FROM people");

  res.status(200).json({ people: people });
}
