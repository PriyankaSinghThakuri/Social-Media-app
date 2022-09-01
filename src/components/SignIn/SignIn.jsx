import React from "react";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import { useRef, useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./SignIn.css";
import { NavLink } from "react-router-dom";
import NewsFeed from "../NewsFeed/NewsFeed";
// import AuthContext from "../../context/AuthProvider";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
// import axios from "../../api/axios";

// const LOGIN_URL = "/auth";

const SignIn = (props) => {
  // const { setAuth } = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSignin = async (e) => {
    e.preventDefault();
    // try {
    //   let res = await axios.post(
    //     "https://paradoxbackend.herokuapp.com/users/login/",
    //     {
    //       password: password,
    //       email: email,
    //     }
    //   );
    //   alert("Successfully Logged in");
    // } catch (error) {
    //   alert("Failed to login");
    // }
    console.log(email, password);
    setEmail("");
    setPassword("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        // props.history.push("/newsfeed")
        <NewsFeed />
      ) : (
        <div className="Login">
          <div className="Logo-container">
            <img
              src={process.env.PUBLIC_URL + "/assets/Logo.png"}
              alt="Responsive image"
              className="Logo"
            />
          </div>
          <h4 className="title">KonnectTeam</h4>
          <p
            ref={errRef}
            className={errMsg ? "errMsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form>
            {/* <!-- Email input --> */}
            <div className="form-outline">
              <input
                type="email"
                required="required"
                autoComplete="false"
                className="form-control"
                placeholder="Email"
                ref={userRef}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* 
    <!-- Password input --> */}
            <div className="form-outline">
              <input
                type="password"
                required="required"
                ref={userRef}
                autoComplete="false"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <!-- 2 column grid layout for inline styling --> */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div className="form-check">
                  <Form.Group className="" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                  </Form.Group>
                </div>
              </div>

              <div className="col" id="Forgot-password">
                {/* <!-- Simple link --> */}
                <a href="#!" className="forgot-password">
                  Forgot password?
                </a>
              </div>
            </div>
            {/* <!-- sign in button --> */}
            <button
              type="button"
              className="signbtn btn btn-primary btn-block mb-4"
              value={loading ? "loading..." : "Sign in"}
              disabled={loading}
              onClick={handleSignin}
            >
              <NavLink to="/newsfeed" className={"SignInbtn"}>
                Sign in
              </NavLink>
            </button>
            {/* <!-- Register buttons --> */}
            <div className="text-center">
              <p>
                Don't have an account?
                <a href="/signup" className="signup">
                  Sign Up
                </a>
              </p>
              <p>or sign up with:</p>

              <div className="socialmedia-icons">
                <ul>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faGoogle} size="2x" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                  </li>
                  <li id="insta-icon">
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                  </li>
                  <li>
                    <a href="#" id="LinkedIn-icon">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SignIn;
