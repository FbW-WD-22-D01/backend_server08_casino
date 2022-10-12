# Lucky Casino

Ihr sollt für eine Glücksspielfirma auf Malta ein Backend erstellen. Das Backend soll die Spieler in einer kleinen lowDB Datenbank verwalten. Jeder Spieler besteht aus folgenden Feldern:
**Beispielspieler:**
```
{
    "id": "a100394830b",
    "name": 'Klaus',
    "password": "meinPassword",
    "age": 21,
    "money": 1000,
    "luckyNumbers": [30, 45, 3]    
}
```
Das Backend soll folgendes "können":
1. alle Spieler anzeigen
2. neuen Spieler anlegen
3. als Spieler neue Glückssnummern auswählen
4. als Spieler Geld auf das Konto laden
5. als Spieler Profil löschen

### Technsicher Hintergrund zu den Aufgaben:
- die Spieler werden in einer lowDB DAtenbank gespeichert (ihr braucht keinen Model Ordner anzulegen)
- erstellt einen globalen Error handler (ihr müsst nicht zwischen production und development unterscheiden)
- alle Routen sollen erreichbar sein unter /players/... und in einem Router ausgelagert werden

#### Routen:
    1. eine `GET` Route unter /players/ --> versucht die Liste ohne die Passwörter auszugeben    
    2. eine `POST` Route unter /players/add --> speichert den neuen Spieler in einer Datenbank
    3. eine `PUT` Route unter /players/:id/lucky --> nimmt 3 neue Nummern entgegen und speichert sie im `luckyNumbers` Array
    4. eine `PUT` Route unter /players/:id/money --> ändert den Geldbetrag auf dem Konto 
    5. eine Delete Route unter players/:id --> löscht den user


#### Middleware:
    - für die `POST` Route:
        1. eine Middleware die überprüft ob ein neuer Spieler über einen Namen, Passwort, age, money verfügt
        2. eine Middleware die überprüft ob der Spieler über 18 Jahre alt ist
        3. eine Middleware die checkt ob der Spieler noch genug Geld hat (mind. 500)
    - für die `PUT` Route:
        1. eine Middleware die überprüft ob der Spieler noch genug Geld hat (mind. 500)
    - für alle /player Routen 
        - einen Logger der über die Console ausgibt, welche Route und Methode der Request ist 

### Bonus

Schreibt ein zweites Skript was ihr vom Terminal startet und welches eine GLückszahl zieht, die Datenbank durchsucht und bei Usern mit der richtigen Zahl, den Geldbetrag verdoppelt und bei allen anderen 100 abzieht. Ihr könnt euch [node-cron](https://www.npmjs.com/package/node-cron) anschauen, um euer Skript zeitlich zu steuern. 