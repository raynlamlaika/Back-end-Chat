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
the workflow of the cros is in your app to prove the a security mechanism called the Same-Origin Policy  comes from the browser
it is a way to let other origins to connect with you server and read reponces
this going to allow connection between to servers  for example the front and back--end  or in server hold in engin in that every one run in other origin 
this is what we can controle in expres app.user(cors())
```
cors({
    origin,
    methods,
    allowedHeaders,
    exposedHeaders,
    credentials,
    maxAge,
    preflightContinue,
    optionsSuccessStatus
})

const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
};

app.use(cors(corsOptions));

```
this  simple visualazation:
```
                 CORS
                  │
       ┌──────────┼──────────┐
       ▼          ▼          ▼
    origin     methods    headers
    "WHO?"     "WHAT?"     "WHICH?"
       │          │          │
       ▼          ▼          ▼
 localhost:3000  GET/POST   Authorization
                            Content-Type

                  │
                  ▼
             credentials
             "Cookies?"

                  │
                  ▼
               maxAge
          "Cache permission?"
```

#### Front-end