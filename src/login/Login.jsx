import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import "./Login.css";

const Login = () => {
  return (
    <div className="background">
      <div className="wrapper">
        <form action=" ">
          <h1>Login</h1>

          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <FaRegUser className="icon" />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
            <FaLock className="icon" />
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember me{" "}
            </label>
            <a href="#"> Forget password? </a>
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
