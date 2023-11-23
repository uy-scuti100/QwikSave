// server.ts
import jsonServer from 'json-server';
import { usersData } from '@/db/users';

const server = jsonServer.create();
const router = jsonServer.router(usersData);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const port = 8000;
server.listen(port, () => {
    console.log(`JSON Server is running on http://localhost:${port}`);
});
