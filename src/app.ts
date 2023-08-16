import cors from 'cors';
import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/users', routes.user);
app.use('/login', routes.login);
app.use('/products', routes.product);
app.use('/orders', routes.order);

export default app;
