import { server } from './server.js'

const port = 8080;

server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
