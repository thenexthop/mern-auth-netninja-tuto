import { Router } from 'express';

// Controller
import { 
  createWorkout, 
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
 } from '../controllers/workout.controller.js';

const router = Router();

// GET All
router.get('/', getAllWorkouts);

// GET one
router.get('/:id', getWorkout);

// POST new Workout
router.post('/', createWorkout);

// PATCH update a specific workout
router.patch('/:id', updateWorkout);

// DELETE delete Workout from DB
router.delete('/:id', deleteWorkout);


export default router;