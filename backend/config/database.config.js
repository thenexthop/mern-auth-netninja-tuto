import mongoose from 'mongoose';

// .env variables
import { DB_URI } from './env.config.js';

const connectToDb = async () => {
  try {
    const db = await mongoose.connect(DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log(`Base de Datos: ${db.connection.name}`);
    
  } catch (error) {
    console.error(`Error al intentar conectar con MongoDB. ${error}`);
  }
};

export default connectToDb;