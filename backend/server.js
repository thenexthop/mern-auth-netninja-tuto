import mongoose from 'mongoose';

// App
import app from './config/app.config.js'

// Constantes del entorno
import { PORT } from './config/env.config.js';

// Base de datos
import connectToDb from './config/database.config.js';

// Conecta a la BDatos MongoDB
connectToDb();

mongoose.connection.once('open', () => {
  console.log(`Already connected to MongoDB database.`);
  app.listen(PORT, () => {
    console.log(`app listening in port: ${PORT}`);
  });
});

