import express from 'express';
import cors from 'cors';
import { corsOptions } from './cors.options.config.js';

// Routes
import workoutRoutes from '../routes/workout.routes.js';

const app = express();

app.use(express.json());

//CORS
app.use(cors(corsOptions));

app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {
  res.status(200).json({
    msg: "This app is working well...",
  })
});

export default app;