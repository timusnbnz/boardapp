# Boardapp

## Einmalige installation

- Repo mit `git clone https://github.com/timusnbnz/boardapp.git` klonen
- NodeJS muss installiert sein
- In das Verzeichnis wechseln und `npm install` ausführen

## Starten von Frontend und Backend

- `npm start` ausführen

## Entwickeln

- Wir nutzen [Preline](https://preline.co/) mit TailwindCSS für die UI

## Skripte in package.json

- **start**: Startet sowohl das Frontend als auch das Backend parallel. Ausführen mit `npm start`.
- **cleanstart**: Löscht den Bildschirm und startet das Projekt neu. Ausführen mit `npm run cleanstart`.
- **start:frontend**: Startet nur das Frontend. Ausführen mit `npm run start:frontend`.
- **start:backend**: Startet nur das Backend. Ausführen mit `npm run start:backend`.
- **repair**: Entfernt alle Build- und Cache-Dateien, installiert Abhängigkeiten neu. Ausführen mit `npm run repair`.

## Befehle

### `npm run start`
Startet die MongoDB- und Redis-Datenbanken in temporären Docker-Containern und führt die Frontend- und Backend-Dienste parallel aus.

### `npm run start:mongodb`
Startet eine temporäre MongoDB-Instanz in einem Docker-Container auf Port 27017.

### `npm run start:redis`
Startet eine temporäre Redis-Instanz in einem Docker-Container auf Port 6379.

### `npm run prod`
Erstellt die Produktions-Builds, stoppt alle laufenden Docker-Container, erstellt die Builds erneut und startet die Anwendung im Produktionsmodus mit Docker Compose.

### `npm run clean`
Stoppt und entfernt alle laufenden Docker-Container, bereinigt ungenutzte Docker-Images und entfernt lokale Build- und Konfigurationsdateien.

### `npm run repair`
Führt den `clean`-Befehl aus, bereinigt ungenutzte Docker-Images, aktualisiert Abhängigkeiten (außer `tailwindcss`) und installiert alle Abhängigkeiten neu mit ausführlicher Ausgabe.

### `npm run build`
Erstellt die Frontend- und Backend-Builds mit `nx`.
