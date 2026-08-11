### Here all what you need t run this project


# WORKFLOW
---
#### DataBase
The project now uses PostgreSQL for its data layer.

Run it from `mini-chat/` with:

```bash
docker compose up -d
```

The initial schema creates `users`, `channels`, `channel_members`, and `messages` tables from `mini-chat/database/init.sql`.
#### DevOps
#### Back-end
first base archetecture is:

```
Client
  │
  ▼
routes
  │
  ▼
middlewares ────► validators
  │
  ▼
controllers
  │
  ▼
services
  │
  ├──────────────► models ─────► Database
  │
  └──────────────► utils
```

Cores `Cross-Origin Resource Sharing `


#### Front-end