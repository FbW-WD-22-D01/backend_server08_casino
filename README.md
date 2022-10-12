Ihr sollt für eine Glücksspielfirma auf Malta ein Backend erstellen. Das Backend soll die Spieler in einer kleinen lowDB Datenbank verwalten. Jeder Spieler besteht aus folgenden Feldern:
Beispielspieler:
```
{
    id: "a100394830b",
    name: 'Klaus',
    password: "meinPassword",
    age: 21,
    money: 1000,
    luckyNumbers: [30, 45, 3]    
}
```
Das Backend soll folgendes "können":
1. alle Spieler anzeigen
2. neuen Spieler anlegen
3. als Spieler neue Glückssnummern auswählen
4. als Spieler Geld auf das Konto laden
5. als Spieler Profil löschen

Technsicher Hintergrund zu den Aufgaben:
- alle Routen sollen erreichbar sein unter /players/... und in einem Router ausgelagert werden

- ROuten:
    1. eine `GET` Route unter /players/ --> versucht die Liste ohne die Passwörter auszugeben    
    2. eine `POST` Route unter /players/add --> speichert den neuen Spieler in einer Datenbank
    3. eine `PUT` Route unter /players/lucky/id  --> nimmt 3 neue Nummern entgegen und speichert sie im `luckyNumbers` Array
    4. eine `PUT` Route unter /players/money/id --> ändert den Geldbetrag auf dem Konto 
    5. eine Delete Route unter players/:id/delete --> löscht den user