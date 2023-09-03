import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// custom hooks
import { useAuthContext } from "../hooks/useAuthContext";
import { useLoginUser } from "../hooks/useLoginUser";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading, isError } = useLoginUser();

  const {state:{user}} = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  }

  return (
    <form className="form login" onSubmit={onSubmit}>
      <h3>Ingresar al sistema</h3>
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
      <button disabled={isLoading}>Ingresar</button>
      { isError && <div className="error">{isError}</div>}
    </form>
  )
}