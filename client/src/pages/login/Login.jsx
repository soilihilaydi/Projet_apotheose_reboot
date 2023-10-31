import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    login();
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
            <input type="text" placeholder="Nom d'utilisateur" />
            <input type="password" placeholder="Mot de passe" />
            <button onClick={handleLogin}>Se connecter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
