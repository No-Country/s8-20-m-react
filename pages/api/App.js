import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
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

const SERVER_PORT = 3030;
app.listen(SERVER_PORT, () => {
  console.log(`server ${SERVER_PORT}`);
});

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://renzonlacovara:Cofi2022@nocountry.xht26b6.mongodb.net/NoCountry?retryWrites=true&w=majority'
    );
    console.log('Conectado con exito a MongoDB usando Moongose.');
  } catch (error) {
    console.error('No se pudo conectar a la BD usando Moongose: ' + error);
    process.exit();
  }
};
connectMongoDB();
