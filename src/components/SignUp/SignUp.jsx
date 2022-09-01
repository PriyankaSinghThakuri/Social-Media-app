import React from "react";
import { useState } from "react";
import "./SignUp.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    console.warn(firstname, lastname, email, password, confirm_password);
    // try {
    //   let res = await axios.post(
    //     "https://paradoxbackend.herokuapp.com/users/register/",
    //     {
    //       firstname: firstname,
    //       lastname: lastname,
    //       password: password,
    //       email: email,
    //     }
    //   );
    //   alert("Successfully Logged in");
    // } catch (error) {
    //   alert("Failed to login");
    // }
  };

  return (
    <div className="signup-form">
      <form>
        <h2>Register</h2>
        <p className="hint-text">
          Create your account. It's free and only takes a minute.
        </p>
        <div className="form-group">
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="first_name"
                placeholder="First Name"
                required="required"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                name="last_name"
                placeholder="Last Name"
                required="required"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Email"
            required="required"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="password"
            placeholder="Password"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            name="confirm_password"
            placeholder="Confirm Password"
            required="required"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-check-label">
            <input type="checkbox" required="required" /> I accept the{" "}
            <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a>
          </label>
        </div>
        <div className="form-group">
          <button
            onClick={handleSignup}
            type="submit"
            className="btn btn-primary btn-lg btn-block"
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="text-center">
        Already have an account? <a href="/">Sign in</a>
      </div>
    </div>
  );
};

export default SignUp;
