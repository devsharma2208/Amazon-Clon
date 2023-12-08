import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import SignInWithGoogle from "./SignInWithGoogle";

function Login() {
  const logedInUser = sessionStorage.getItem("loginUser");
  console.log(logedInUser);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [massage, setMassage] = useState("");
  const [isVisible, setIsvisible] = useState(false);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
        alert("success");
        localStorage.setItem("uId", user.uid);
        sessionStorage.setItem(
          "loginUser",
          JSON.stringify({ name: user.name, email: user.email })
        );
      })

      .catch((error) => {
        const errorCode = error.code;

        const errorMessage = error.message;
        if (!email.includes("@") || password.length < 6) {
          setMassage("Enter a valid email and password");
          e.preventDefault();
        } else {
          setMassage("Your email is not register please create your account..");
        }
        console.log(errorCode, errorMessage);
        setIsvisible(true);
      });
  };
  const hendleSignOut = (e) => {
    e.preventDefault();
    sessionStorage.removeItem("loginUser");
    navigate("/login");
  };
  return (
    <>
      {!logedInUser ? (
        <div className="login">
          <Link to="/">
            <img
              className="login_logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt=""
            />
          </Link>

          <div className="login_container">
            <h1>Sign in</h1>
            <form>
              <h5>E-mail</h5>
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
              />
              <h5>Password</h5>
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
              />
              <button
                onClick={login}
                type="submit"
                className="login_signInButton"
              >
                Sign In
              </button>
            </form>
            <p>
              By signing-in you agree to Amazon's Conditions of Use & Sale.
              Plese see our Privacy Notice, Our Cookies Noties and our
              Interest-Based Ads Notice.
            </p>

            <button className="login_registerButton">
              <Link to="/login/register" className="modal_registor_button">
                Create your Amazon Account
              </Link>
            </button>
            <br />
            <SignInWithGoogle />
            <br />
            {isVisible ? <h6>{massage}</h6> : <div></div>}
          </div>
        </div>
      ) : (
        <div>
          <input onClick={hendleSignOut} type="submit" value="Sign Out" />
        </div>
      )}
    </>
  );
}

export default Login;
