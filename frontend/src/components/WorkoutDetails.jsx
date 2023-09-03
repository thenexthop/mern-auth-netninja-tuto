// Date format
import { formatDistanceToNow } from 'date-fns';

// import languages
import { es } from 'date-fns/locale';

// Custom hooks
import { useWorkoutsContext } from '../hooks/useWorkoutsContext';
import { useAuthContext } from '../hooks/useAuthContext'

// Actions creators
import { deleteWorkout } from '../context/actions/workouts.actions';

const WorkoutDetails = ({ id, title, reps, load, createdAt }) => {

  const {state:{user}} = useAuthContext();
  const { dispatch } = useWorkoutsContext();

  async function handleDelete(id) {

    if(!user) {
      return;
    }

    const res = await fetch(`http://localhost:5400/api/workouts/${id}`, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${user.token}`,
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