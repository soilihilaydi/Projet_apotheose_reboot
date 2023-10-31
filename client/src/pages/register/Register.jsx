import { Link } from "react-router-dom";
import "./register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Elektron konnection.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Vous avez un compte?</span>
          <Link to="/login">
          <button>Se connecter</button>
          </Link>
        </div>
        <div className="right">
          <h1>S'enregistrer</h1>
          <form>
            <input type="text" placeholder="Nom d'utilisateur" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mot de passe" />
            <input type="text" placeholder="Nom" />
            <button>S'enregistrer</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
