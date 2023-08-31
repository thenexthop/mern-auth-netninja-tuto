import { Schema, model } from 'mongoose';

const workoutSchema = new Schema({
  title: {
    type: String,
    required: [true, "Debe indicar el nombre del ejercicio."],
  },
  reps: { 
    type: Number, 
    required: [true, "Debe indicar la cantidad de repeticiones."],
  },
  load: { 
    type: Number, 
    required: [true, "Debe indicar el peso."],
  },

}, { timestamps: true });

const Workout = new model('Workout', workoutSchema);

export default Workout;
