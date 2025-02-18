import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export default async function handler(req, res) {

    const db = await open({
      filename: './db.sqlite',
      driver: sqlite3.Database
    });

    const { title, content } = req.body;

    db.run(`INSERT INTO notes (title, content) VALUES ('${title}', '${content}')`)

    res.status(200).json({ title, content });
}