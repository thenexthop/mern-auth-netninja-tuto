import { useEffect } from "react";

// custom hook to manage global app Context
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// Action creators
import { setAllWorkouts } from '../context/actions/workouts.actions';

// Components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { state:{ workouts }, dispatch } = useWorkoutsContext();
  
  useEffect(()=>{
    const fetchWorkouts = async () => {
      const resp = await fetch("http://localhost:5400/api/workouts");
      const json = await resp.json();

      if(resp.ok) {
        const { data } = json;

        console.log("data: ", data);
        dispatch(setAllWorkouts(data));
        //console.log(workouts);
      }
    }

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
      { workouts && workouts.map(workout => (
        <WorkoutDetails 
          key={ workout._id } 
          id={ workout._id } 
          createdAt={workout.createdAt}
          load={workout.load}
          title={workout.title}
          reps={workout.reps}
        />
      )) }
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home;