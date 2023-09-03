import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// custom hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useRegisterUser } from "../hooks/useRegisterUser";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { registerUser, isLoading, isError } = useRegisterUser();

  const {state:{user}} = useAuthContext();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  async function onSubmit(e) {
    e.preventDefault();

    await registerUser(email, password);
  }

  return (
    <form className="form register" onSubmit={onSubmit}>
      <h3>Nuevo usuario</h3>
      <label>Correo electrónico</label>
      <input
        type="text"
        onChange={(e) => {setEmail(e.target.value)}}
        value={email}
        placeholder="email"
      />
      <label>Contraseña</label>
      <input
        type="password"
        onChange={(e) => {setPassword(e.target.value)}}
        value={password}
        placeholder="password"
      />
      <button disabled={isLoading}>Enviar datos</button>
      {isError && (<div className="error">{isError}</div>)}
    </form>
  )
  
}