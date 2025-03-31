# Boardapp

## Einmalige installation

- Repo mit `git clone https://github.com/timusnbnz/boardapp.git` klonen
- NodeJS muss installiert sein
- In das Verzeichnis wechseln und `npm install` ausführen

## Starten von Frontend und Backend

- `npm start` ausführen

## Entwickeln

- Wir nutzen [Preline](https://preline.io/) mit TailwindCSS für die UI

## Skripte in package.json

- **start**: Startet sowohl das Frontend als auch das Backend parallel. Ausführen mit `npm start`.
- **cleanstart**: Löscht den Bildschirm und startet das Projekt neu. Ausführen mit `npm run cleanstart`.
- **start:frontend**: Startet nur das Frontend. Ausführen mit `npm run start:frontend`.
- **start:backend**: Startet nur das Backend. Ausführen mit `npm run start:backend`.
- **repair**: Entfernt alle Build- und Cache-Dateien, installiert Abhängigkeiten neu. Ausführen mit `npm run repair`.
