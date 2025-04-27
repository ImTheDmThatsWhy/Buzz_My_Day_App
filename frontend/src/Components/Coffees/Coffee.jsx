import "./Coffee.css";
import React, { useState, useEffect } from "react";
import api from "./../API/api.jsx";

function Coffee() {
  const [error, setError] = useState("");
  const [Success, setSuccess] = useState("");
  const [loginData, setLoginData] = useState(null);
  const [Account, setAccount] = useState({
    _id: "",
    displayname: "",
    email: "",
    name: "",
    description: "",
  });
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
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [loginData]);

  const createCoffee = async (coffee) => {
    try {
      if (isCreateCoffee) {
        await api
          .post("/coffee", newCoffee, getAuthorizationToken())
          .then(() => {
            setSuccess("coffee created");
            console.log("coffee successfully submitted");
            handleSubmit();
          })
          .catch((err) => {
            if (err?.response?.data)
              console.error("Error creating coffee:", err.response?.data);
            console.error("Error creating coffee:", err);
            setError(err.response?.data?.error || "Error occured");
          });
      } else {
        await api
          .patch("/coffee/" + coffee._id, getAuthorizationToken())
          .then(() => {
            setSuccess("successfully edited");
            console.log(" successfully edited");
            handleSubmit();
          })
          .catch((err) => {
            if (err?.response?.data)
              console.error("Error updating coffee:", err.response?.data);
            console.error("Error updating coffee:", err);
            setError(err.response?.data?.error || "Error occured");
          });
      }
    } catch (error) {}
  };

  const createFavourite = async (coffee_id) => {
    const newFavourite = {
      coffee_id: coffee_id,
      account_id: Account._id,
    };
    await api
      .post("/favourite", newFavourite, getAuthorizationToken())
      .then(() => {
        setSuccess("successfully added to favourites");
      })
      .catch((err) => {
        if (err?.response?.data)
          console.error("Error creating favourite:", err.response?.data);
        console.error("Error creating favourite:", err);
        setError(err.response?.data?.error || "Error occured");
      });
  };
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://buzz-my-day-app-xaqh.onrender.com/coffee")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <p>{error}</p>
      <div className="card-wrapper">
        {records.map((coffee, index) => (
          <div className="card" key={index}>
            <h3>{coffee.name}</h3>
            <p>Brand: {coffee.brand}</p>
            <p>Type: {coffee.type}</p>
            <p>Description: {coffee.description}</p>
            <p>Cost: ${coffee.cost}</p>
            <p>Rating: {coffee.rating}/5</p>
            <div>
              <button
                className="add"
                onClick={() => createFavourite(coffee._id)}
              >
                Add to Favourites
              </button>
            </div>
          </div>
        ))}
        <p>{Success}</p>
      </div>
    </div>
  );
}

export default Coffee;
