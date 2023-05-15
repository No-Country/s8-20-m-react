import cookieParser from 'cookie-parser';
import express from 'express';
import passport from 'passport';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js';
import initializePassport from './config/passport.config.js';
import __dirname from './dirname.js';
import cartRouter from './routers/cart.router.js';
import productRouter from './routers/products.router.js';
import userRouter from './routers/users.router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(cookieParser('blablabla'));

initializePassport();
app.use(passport.initialize());
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use('/api/users', userRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
  console.log(`server ${SERVER_PORT}`);
});

const mongoInstance = async () => {
  try {
    await MongoSingleton.getInstance();
  } catch (error) {
    console.error(error);
  }
};
mongoInstance();
