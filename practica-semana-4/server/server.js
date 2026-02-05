const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const bodyParser = require('body-parser');

// 1. Aplicar middlewares por defecto (logger, static, etc.)
server.use(middlewares);

// 2. CONFIGURAR EL LÍMITE: Aquí aumentamos a 10MB (ajusta según necesites)
server.use(bodyParser.json({ limit: '10mb' }));
server.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// 3. Usar el router estándar
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server con límite extendido está corriendo en http://localhost:3000');
});