import { Low, JSONFile } from 'lowdb';

// Datenbank initialisieren
const adapter = new JSONFile('./data/playerData.json')
const db = new Low(adapter)
await db.read()

