import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLogged, setLogged] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setUsername("");
    setPassword("");
    setLogged(false);
  }, []);

  /**
   * Login validation
   */
  const submit = () => {
    if (username !== "admin" && password !== "admin") {
      setError(true);
    } else {
      setError(false);
      setLogged(true);
      navigate("/");
    }
  };

  /**
   *
   * set username and password
   */
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Log In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              required
              type="email"
              value={username}
              className="form-control mt-1"
              placeholder="Enter username"
              onChange={onChangeUsername}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              required
              value={password}
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={onChangePassword}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button onClick={submit} type="button" className="btn btn-primary">
              LOGIN
            </button>
            {error && (
              <label style={{ textAlign: "center", color: "red" }}>
                {" "}
                username or password is incorrect.
              </label>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
