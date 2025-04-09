#!/bin/bash
# Windows-specific repair script for boardapp

echo "🧹 Cleaning environment..."
# Stop and remove Docker containers
docker ps -aq | xargs docker stop 2>/dev/null || true
docker ps -aq | xargs docker rm 2>/dev/null || true
# Remove directories - using Git Bash rm which works in Windows
rm -rf node_modules dist .angular .nx .vscode .redis .postgresql .nginx-logs .fail2ban prisma/migrations package-lock.json

echo "🗑️ Pruning Docker images..."
docker image prune -af

echo "🔄 Updating dependencies..."
npx npm-check-updates -u --reject tailwindcss

echo "📦 Installing dependencies..."
npm i --verbose --force

echo "🐳 Pulling Docker images..."
docker pull postgres:latest
docker pull redis:latest

echo "🐘 Starting PostgreSQL..."
# Use PWD for Windows-Git compatibility
docker run --rm -d --name dev-postgresql -p 5432:5432 \
  -v "/c/dev/dhbw/verteilte\ Systeme/boardapp/.postgresql:/var/lib/postgresql/data" \
  -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=supersecret -e POSTGRES_DB=boardapp \
  postgres:latest

echo "⏳ Waiting for PostgreSQL to start..."
sleep 10

echo "🔄 Running database migrations..."
npx prisma migrate deploy

echo "✅ Windows repair completed successfully"