## 1 - installer le projet
    pnpm install

## 2 - lancer docker
    lancer docker avec docker-compose

## 3 - lancer les migrations de base
    pnpm migration:run

## 4 - lancer le projet
    pnpm dev

## Créer une migration
    pnpm run migration:generate src/database/migrations/CreateTest

## Lancer une migration
    pnpm run migration:run

## Annuler une migration
    pnpm run migration:revert
