# 🚀 Kelkun Notes – Backend Test

Bienvenue sur le **test technique backend Kelkun** 🎯  
Ce projet utilise **NestJS**, **GraphQL**, **PostgreSQL** et **TypeORM**.  
Le but est de t’offrir un environnement complet pour tester tes compétences en architecture et en logique backend.

---

## ⚙️ Prérequis

Avant de commencer, assure-toi d’avoir installé :

- [Node.js](https://nodejs.org/) (>= 18)
- [pnpm](https://pnpm.io/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- PostgreSQL (via Docker, déjà configuré)

---

## 🧩 Étapes d’installation

### 1️⃣ Installer les dépendances
```bash
pnpm install
```

### 2️⃣ Lancer l’environnement Docker
Démarre la base de données et les services requis :
```bash
docker-compose up -d
```

### 3️⃣ Lancer les migrations initiales
Applique la structure de base de données :
```bash
pnpm migration:run
```

### 4️⃣ Démarrer le projet 🚀
```bash
pnpm dev
```

L’API sera disponible sur :
```
http://localhost:[PORT_DEFINI_DANS_ENV]/graphql
```

---

## 🧱 Commandes utiles – TypeORM

### 🆕 Créer une migration
```bash
pnpm run migration:generate src/database/migrations/CreateTask
```

### 📤 Lancer une migration
```bash
pnpm run migration:run
```

### ⏪ Annuler la dernière migration
```bash
pnpm run migration:revert
```

---

## 📖 Notes importantes

- Le dossier des entités se trouve dans :
  ```
  src/database/entities/
  ```

- Les fichiers de migration sont générés automatiquement à partir de tes entités.
- Ne modifie **jamais** les migrations générées manuellement sans une bonne raison.

---

## 🧠 Astuce

Si tu modifies la base de données (ex : ajout d’une entité `Task`),
pense à :

1. Générer une nouvelle migration (`pnpm run migration:generate`)
2. L’exécuter (`pnpm run migration:run`)
3. Vérifier la table dans **pgAdmin** ou ton client SQL préféré

---

## 💡 En cas de souci

Si tu rencontres une erreur liée à la base de données :
```bash
docker-compose down -v
docker-compose up -d
pnpm migration:run
```

Cela réinitialise ton environnement proprement.

---

## 🧭 Structure du projet

```
src/
 ┣ database/
 ┃ ┣ entities/          # Entités TypeORM
 ┃ ┣ migrations/        # Migrations générées
 ┃ ┗ datasource.ts      # Configuration de la connexion PostgreSQL
 ┣ app/
 ┃ ┗ ...                # Modules NestJS (ex: Project, Task, etc.)
 ┣ main.ts              # Point d’entrée de l’application
```

---

💬 **Bon courage et amuse-toi bien !**  
Le but de ce test est de voir ta rigueur, ta logique et la qualité de ton code — pas juste de tout faire fonctionner 😉
