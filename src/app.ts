import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use('/products', routes.product);
app.use('/users', routes.user);
app.use('/orders', routes.order);
app.use('/login', routes.login);

export default app;
