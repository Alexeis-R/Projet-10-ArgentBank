import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { loginAction, logoutAction } from "../Redux/authAction";

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { errorMessage, isLoading, token } = useSelector((state) => state.auth);

  // Redirige vers la page user si l'auth ok
  useEffect(() => {
    if (token) {
      navigate("/user");
    }
  }, [token, navigate]);

  // Gestion du formulaire
  const handleSubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);

    dispatch(
      loginAction({
        email: fd.get("email"),
        password: fd.get("password"),
      })
    );
  };

  // Gestion de la déconnexion
  const handleLogout = () => {
    dispatch(logoutAction());
    navigate("/signin");
  };

  // Affiche un message de bienvenue si l'utilisateur est connecté
  if (token) {
    return (
      <Layout>
        <main className="main bg-dark">
          <section className="sign-in-content">
            <h1>Welcome</h1>
            <button onClick={handleLogout} className="sign-out-button">
              Sign Out
            </button>
          </section>
        </main>
      </Layout>
    );
  }

  return (
    <Layout>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                name="email"
                type="text"
                id="username"
                defaultValue=""
                disabled={isLoading}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                id="password"
                defaultValue=""
                disabled={isLoading}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" disabled={isLoading} />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              type="submit"
              className="sign-in-button"
              disabled={isLoading}
            >
              {isLoading ? "Loading ..." : "Sign In"}
            </button>
            {errorMessage && (
              <p className="error-message">
                <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
                {errorMessage}
              </p>
            )}
          </form>
        </section>
      </main>
    </Layout>
  );
}

export default Login;
