// Date format
import { formatDistanceToNow } from 'date-fns';

// import languages
import { es } from 'date-fns/locale';

// Custom hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';

// Actions creators
import { deleteWorkout } from '../context/actions/workouts.actions';

const WorkoutDetails = ({ id, title, reps, load, createdAt }) => {

  const { dispatch } = useWorkoutsContext();

  async function handleDelete(id) {

    const res = await fetch(`http://localhost:5400/api/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
      }
    });
  
    if(res.ok) {
      console.log(`Workout with id: ${id} was deleted!`);
      dispatch(deleteWorkout(id));
    }
    
  }

  return (
    <>
      <div className="workout-details">
        <h4>{ title }</h4>
        <p><strong>Load (Kg): </strong>{ load }</p>
        <p><strong>Reps: </strong>{ reps }</p>
        <p>{ formatDistanceToNow(new Date(createdAt), {
          addSuffix: true,
          locale: es
        }).replace("alrededor de", "") }</p>
        <span className='material-symbols-outlined' onClick={() => handleDelete(id)}>delete</span>
      </div>
    </>
  )
}

export default WorkoutDetails