import { useState } from 'react';

// Global context
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// Action creator
import { createNewWorkout } from '../context/actions/workouts.actions';

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);
  
  const { dispatch } = useWorkoutsContext();

  async function onSubmit(e) {
    e.preventDefault();

    //console.log("Inputs: ", title, reps, load);
    // if(!title || !reps || !load){
    //   console.log("Se deben completar todos los campos.");
    //   return;
    // }  

    const workout = {title, reps, load}

    const res = await fetch("http://localhost:5400/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      }
    });

    const json = await res.json();
    
    if(!res.ok){
      console.log(json);
      setError(json.errorMsg);
      setEmptyFields(json.emptyFields)
      return;
    }
    
    if(json.status === "success") {
      console.log("it works!", json);
      dispatch(createNewWorkout(json.data));
      setError(null)
      setEmptyFields([])
      setTitle("")
      setLoad("")
      setReps("")
    }

  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h3>Add new Workout</h3>
      <label>Title: </label>  
      <input 
        className={`input${emptyFields.length > 0 && emptyFields.includes("title") ? ' error' : ''}`}
        name="title"
        onChange={(e)=> setTitle(e.target.value)}
        value={title}
      />
      <label>Reps: </label>  
      <input 
        className={`input${emptyFields.length > 0 && emptyFields.includes("reps") ? ' error' : ''}`}
        type='number'
        name="reps"
        onChange={(e)=> setReps(e.target.value)}
        value={reps}
      />
      <label>Load (in Kgs.): </label>  
      <input 
        className={`input${emptyFields.length > 0 && emptyFields.includes("load") ? ' error' : ''}`}
        type='number'
        name="load"
        onChange={(e)=> setLoad(e.target.value)}
        value={load}
      />

      <button>Guardar</button>
      
      { error &&  <div className='error'>{error}</div>}

    </form>
  )
}