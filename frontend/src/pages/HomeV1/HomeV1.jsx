import { useEffect, useState } from "react";

// Components
import WorkoutDetails from "../../components/WorkoutDetails"

import WorkoutForm from "../../components/WorkoutForm";

// --------------------------------------------
// Primera versión del componente Home
// esta usa el hook useState para la lista
// de workouts. 
//
// Se mantiene aquí solo para tenerla de referencia
const HomeV1 = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(()=>{
    const fetchWorkouts = async () => {
      const resp = await fetch("http://localhost:5400/api/workouts");
      const json = await resp.json();

      if(resp.ok) {
        const { data } = json;

        // console.log(data);
        setWorkouts(data);
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

export default HomeV1;