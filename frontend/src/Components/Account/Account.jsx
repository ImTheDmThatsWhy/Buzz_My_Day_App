import React, { useState, useEffect } from "react";
import api from "../API/api.jsx";
import "./Account.css";

const AccountCreate = () => {
  const [error, setError] = useState("");
  const [isCreateAccount, setIsCreateAccount] = useState(true);
  const [Success, setSuccess] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [loginData, setLoginData] = useState(null);
  const handleSubmit = () => {
    setSubmitted(true);
  };
  const [Account, setAccount] = useState({
    displayname: "",
    email: "",
    name: "",
    description: "",
  });

  const deleteAccount = async () => {
    await api
      .delete("/account/" + loginData.displayname, getAuthorizationToken())
      .then(
        setAccount({
          displayname: "",
          email: "",
          name: "",
          description: "",
        }),
      )
      .catch((error) =>
        setError(error.response?.data?.error || "Error occured"),
      );
  };

  const updateAccount = () => {
    setSubmitted(false);
    setIsCreateAccount(false);
  };

  const getAuthorizationToken = () => {
    return {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
  };

  const fetchLogin = async () => {
    const user_id = localStorage.getItem("user_id");
    if (user_id) {
      await api
        .get("/user/" + user_id, getAuthorizationToken())
        .then((response) => {
          setLoginData({ ...response.data });
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    fetchLogin();
  }, []);

  useEffect(() => {
    if (loginData) {
      api
        .get("/account/" + loginData.displayname, getAuthorizationToken())
        .then((response) => {
          setAccount({ ...Account, ...response.data });
          setIsCreateAccount(false);
          setSubmitted(true);
        })
        .catch((err) => {
          setAccount({ ...Account, ...loginData });
          console.log(err);
        });
    }
  }, [loginData]);

  const createAccount = async () => {
    try {
      if (isCreateAccount) {
        await api
          .post("/account", Account, getAuthorizationToken())
          .then(() => {
            setSuccess("successfully submitted");
            console.log("account successfully submitted");
            handleSubmit();
          })
          .catch((err) => {
            if (err?.response?.data)
              console.error("Error creating account:", err.response?.data);
            console.error("Error creating account:", err);
          });
      } else {
        await api
          .patch(
            "/account/" + loginData.displayname,
            Account,
            getAuthorizationToken(),
          )
          .then(() => {
            setSuccess("successfully submitted");
            console.log("account successfully submitted");
            handleSubmit();
          })
          .catch((err) => {
            if (err?.response?.data)
              console.error("Error updating account:", err.response?.data);
            console.error("Error updating account:", err);
            setError(err.response?.data?.error || "Error occured");
          });
      }
    } catch (error) {}
  };

  return (
    <div>
      <p>{error}</p>
      <div className="accountcontainer">
        <div className="secondcontainer">
          <div className="headeraccount">Account Details</div>
          <p className="welcome">
            Welcome new coffee enthusiast! Please enter your details below.
          </p>
          <div>
            <textarea
              className="description"
              disabled={isSubmitted}
              type="text"
              placeholder="description"
              value={Account.description}
              onChange={(e) =>
                setAccount({
                  ...Account,
                  description: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <div>
          <div className="form">
            <label id="label">displayname:</label>
            <input
              id="displayname"
              className="input"
              disabled={isSubmitted}
              value={Account.displayname}
              onChange={(e) =>
                setAccount({
                  ...Account,
                  displayname: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="form">
            <label id="label">name:</label>
            <input
              id="name"
              className="input"
              disabled={isSubmitted}
              value={Account.name}
              onChange={(e) =>
                setAccount({
                  ...Account,
                  name: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="form">
            <label id="label">email:</label>
            <input
              id="email"
              className="input"
              disabled={isSubmitted}
              value={Account.email}
              onChange={(e) =>
                setAccount({
                  ...Account,
                  email: e.target.value,
                })
              }
            ></input>
          </div>
          <div className="Submit_container">
            {!isSubmitted ? (
              <div className="submit">
                <button className="button" onClick={createAccount}>
                  Submit
                </button>
              </div>
            ) : null}
            <div className="submit">
              <button className="button" onClick={updateAccount}>
                Edit
              </button>
            </div>
            {!isSubmitted && !isCreateAccount ? (
              <div className="submit">
                <button className="button" onClick={deleteAccount}>
                  Delete
                </button>
              </div>
            ) : null}
            <p className="success">{Success}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountCreate;
