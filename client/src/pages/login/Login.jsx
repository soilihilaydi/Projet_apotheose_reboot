import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
    
  });

  const [err, setErr] = useState(null);

  const navigate = useNavigate()

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/")
    } catch (err) {
      setErr(err.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Elektron konnection.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Vous n'avez pas de compte?</span>
          <Link to="/register">
            <button>Enregistre vous</button>
          </Link>
        </div>
        <div className="right">
          <h1>Se connecter</h1>
          <form>
            <input type="text" placeholder="Nom d'utilisateur" name="username"
              onChange={handleChange} />
            <input type="password" placeholder="Mot de passe" name="password"
              onChange={handleChange}/>
            {err && err}
            <button onClick={handleLogin}>Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
