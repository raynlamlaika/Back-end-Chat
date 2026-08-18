# Mini Chat Project Checkpoint

## Done

- [x] PostgreSQL Compose service configured in `docker-compose.yml`.
- [x] Database schema added in `database/init.sql`.
- [x] Node PostgreSQL pool and startup connection check added in `src/config/db.js`.
- [x] Environment values aligned in `.env`:
	- `POSTGRES_DB=mini_chat`
	- `POSTGRES_USER=postgres`
	- `POSTGRES_PASSWORD=password`
	- Node `DB_*` values use the same database and password.
- [x] Express app boots through `src/index.js` and registers the API routers.
- [x] Basic JSON parsing, CORS, authentication middleware, and error middleware are wired.

## Resume Here

- [ ] Implement the user model and users service/controller.
- [ ] Implement authentication service/controller and create the auth routes.
- [ ] Add request validators and validation middleware to the routes.
- [ ] Implement channel model/service/controller and channel routes.
- [ ] Implement message model/service/controller and message routes.
- [ ] Confirm auth middleware behavior for public and protected endpoints.
- [ ] Add socket events and connect the socket server if realtime chat is required.
- [ ] Add API tests and a real `npm test` script.
- [ ] Start the stack and verify the database connection.

## Database Login

From the `mini-chat/` directory on the host:

```bash
docker compose exec db psql -U postgres -d mini_chat -W
```

Password: `password`

From inside the database container:

```bash
psql -U postgres -d mini_chat -W
```

## Notes

- The route files currently export empty routers, so no API endpoints are implemented yet.
- `DB_HOST=localhost` is correct when Node runs on the host. If Node is later added as a Compose service, change it to `db`.
- Run `docker compose up -d` from `mini-chat/` before testing the login command.
