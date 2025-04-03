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

- **start**: Startet PostgreSQL und Redis in temporären Docker-Containern und führt die Frontend- und Backend-Dienste parallel aus. Ausführen mit `npm start`.
  - Startet PostgreSQL und Redis mit den Skripten `start:postgresql` und `start:redis`.
  - Führt die Frontend- und Backend-Dienste parallel aus mit `nx serve frontend` und `nx serve backend`.

- **repair**: Bereinigt die Umgebung, aktualisiert Abhängigkeiten (außer `tailwindcss`), und installiert alle Abhängigkeiten neu. Ausführen mit `npm run repair`.
  - Führt `npm run clean` aus, um alle Build- und Cache-Dateien zu entfernen.
  - Bereinigt ungenutzte Docker-Images mit `docker image prune -af`.
  - Aktualisiert Abhängigkeiten mit `npx npm-check-updates -u --reject tailwindcss`.
  - Installiert Abhängigkeiten neu mit `npm ci --verbose --force`.
  - Lädt Docker-Images mit `npm run pull:images`.
  - Startet PostgreSQL, führt Datenbankmigrationen aus, und stoppt PostgreSQL.

- **component**: Generiert eine neue Angular-Komponente im Frontend-Projekt. Ausführen mit `npm run component -- COMPONENT_NAME=<Name>`.
  - Nutzt `npx nx generate @schematics/angular:component`, um eine neue Komponente zu erstellen.
  - Platziert die Komponente im Verzeichnis `apps/frontend/src/app`.

- **prod**: Erstellt die Produktions-Builds, stoppt alle laufenden Docker-Container, und startet die Anwendung im Produktionsmodus mit Docker Compose. Ausführen mit `npm run prod`.
  - Führt `docker-compose down` aus, um laufende Container zu stoppen.
  - Baut die Anwendung mit `npm run build`.
  - Startet die Anwendung im Produktionsmodus mit `docker-compose up -d`.

- **fix:prisma**: Startet PostgreSQL, führt Datenbankmigrationen mit einem automatisch generierten Namen aus, und stoppt PostgreSQL. Ausführen mit `npm run fix:prisma`.
  - Nutzt `npx prisma migrate dev --name auto-migration`, um Migrationen auszuführen.

- **start:prisma**: Öffnet Prisma Studio, um die Datenbank zu inspizieren. Ausführen mit `npm run start:prisma`.

- **clean**: Entfernt alle Build- und Cache-Dateien sowie Docker-Container. Ausführen mit `npm run clean`.
  - Stoppt und entfernt alle Docker-Container.
  - Löscht Verzeichnisse wie `node_modules`, `dist`, und andere Cache-Dateien.
