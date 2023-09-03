import { Link, NavLink } from "react-router-dom";

// custom hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogoutUser } from "../hooks/useLogoutUser";

export default function Navbar() {
  const { state:{ user } } = useAuthContext(); 
  const { logout } = useLogoutUser();

  function handleLogout() {
    logout();  
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout buddy</h1>
        </Link>
        <nav>
          {
            user ? (
              <div>
                <span>{user.email}</span>
                <button onClick={handleLogout}>Logout</button>
              </div>
            ) : (
          <div>
            <NavLink to='register'>
              Registro
            </NavLink>
            <NavLink to='login'>
              Login
            </NavLink>
          </div>
            )
          }
        </nav>
      </div>
    </header>
  );
}