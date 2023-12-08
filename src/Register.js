import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMassage] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    // console.log("register");

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user.uid);

        try {
          const docRef = addDoc(collection(db, "user"), {
            user: user,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        sessionStorage.setItem(
          "loginUser",
          JSON.stringify({ name: name, email: email })
        );
        navigate("/");
        alert("Success");
      })

      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/email-already-in-use") {
          setMassage("This email is Register already please ↑↑ Sign in. ");
        } else if (!email.includes("@")) {
          setMassage("Enter a valid email.");
          e.preventDefault();
        } else if (password.length < 6) {
          setMassage("Enter a valid password minimum 6 digit / character.");
        } else {
          setMassage("");
        }
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className="register">
      {" "}
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login_container">
        <h1>Create account</h1>
        <form>
          <h5>Name</h5>
          <input
            className="input_rig"
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="First and last name"
          />
          <h5>E-mail</h5>
          <input
            className="input_rig"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
          />

          <h5>Password</h5>
          <input
            className="input_rig"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="At least 6 characters"
          />
          <button className="registerButton" onClick={register}>
            Create your Amazon Account
          </button>
        </form>
        <p>
          By creating an account or logging in, you agree to Amazon's{" "}
          <span className="rig">Condition of Use</span> and{" "}
          <span className="rig">Privacy Policy</span>.
        </p>

        <br />

        <div>
          <p>
            Already have an account{" "}
            <Link className="go_to_login" to="/login">
              Sign in..
            </Link>
          </p>
          {massage && <h6>{massage}</h6>}
        </div>
      </div>
    </div>
  );
}

export default Register;
