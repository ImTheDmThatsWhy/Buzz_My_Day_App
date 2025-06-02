import React, { useState, useEffect } from "react";
import api from "./../API/api.jsx";
import "./LoginRegister.css";
import mail_icon from "./mail-02.svg";
import password_icon from "./password.svg";
import person_icon from "./person.svg";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [isRegisterPage, setIsRegisterPage] = useState(false);
  const onClick = () => setIsRegisterPage(!isRegisterPage);
  const [Success, setSuccess] = useState("");
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  const [user, setLoginUser] = useState({
    displayname: "",
    email: "",
    password: "",
  });

  const getAuthorizationToken = () => {
    return {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
  };

  useEffect(() => {
    if (hasLoggedIn) {
      api
        .post("/user/admin", {}, getAuthorizationToken())
        .then((response) => {
          navigate("/edit");
        })
        .catch((err) => {});
    }
  }, [hasLoggedIn]);

  const createUser = async () => {
    if (isRegisterPage) {
      try {
        await api.post("/user/register", user).then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_id", response.data.user_id);
          navigate("/account");
        });
        setSuccess("successfully submitted");
        setLoginUser({ displayname: "", email: "", password: "" });
      } catch (error) {
        if (error.response?.data)
          console.error("Error creating user:", error.response?.data);
        console.error("Error creating user:", error);
      }
    } else {
      try {
        await api.post("/user/login", user).then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("user_id", response.data.user_id);
        });
        setLoginUser({ email: "", password: "" });
        setSuccess("successfully logged in");
        setError("")
        setHasLoggedIn(true);
      } catch (error) {
        if (error.response?.data)
          console.error("Error logging in user:", error.response?.data);
        console.error("Error logging user:", error);
        setError(error.response?.data?.error || "Error occured");
      }
    }
  };

  //attribute for icons Uicons by <a href="https://www.flaticon.com/uicons">Flaticon</a>
  return (
    <main>
      <p>{error}</p>
      <div className="container">
        <div className="header">
          <div className="register">
            {isRegisterPage ? "Register" : "Login"}
          </div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {isRegisterPage ? (
            <div className="input">
              <img
                className="icon"
                src={person_icon}
                alt="image of person icon"
              ></img>

              <input
                type="text"
                placeholder="displayname"
                value={user.displayname}
                onChange={(e) =>
                  setLoginUser({
                    ...user,
                    displayname: e.target.value,
                  })
                }
              />
            </div>
          ) : null}
          <div className="input">
            <img
              className="icon"
              src={mail_icon}
              alt="image of email icon"
            ></img>
            <input
              type="email"
              placeholder="email"
              value={user.email}
              onChange={(e) =>
                setLoginUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="input">
            <img
              className="icon"
              src={password_icon}
              alt="image of lock icon"
            ></img>
            <input
              type="password"
              placeholder="password"
              value={user.password}
              onChange={(e) =>
                setLoginUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="Submit_container">
          <div className="submit">
            <button className="button" onClick={createUser}>
              Submit
            </button>
          </div>
          <div className="submit">
            <button className="button" onClick={onClick}>
              {isRegisterPage ? "Login" : "Register"}
            </button>
          </div>
          <p className="success">{Success}</p>
        </div>
      </div>
    </main>
  );
};
export default LoginRegister;
