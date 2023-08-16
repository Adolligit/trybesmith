import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import express from 'express';
import yaml from './utils/ConvertYamlFile';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(yaml('./public/swagger.yml')),
);
app.use('/users', routes.user);
app.use('/login', routes.login);
app.use('/products', routes.product);
app.use('/orders', routes.order);

export default app;
