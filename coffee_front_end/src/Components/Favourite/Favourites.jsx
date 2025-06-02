import "./Favourites.css";
import React, { useState, useEffect } from "react";
import api from "../API/api.jsx";

function Favourites() {
  const [Success, setSuccess] = useState("");
  const [error, setError] = useState("");
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
        .catch((err) => {
          console.log(err);
          setError(err.response?.data?.error || "Error occured");
        });
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
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (!Account._id) return;
    api
      .get("favourite/account/" + Account._id, getAuthorizationToken())
      .then((response) => {
        setRecords(response.data);
      })
      .catch((err) => console.log(err));
  }, [Account]);

  const deleteFavourite = async (favourite_id, index) => {
    await api
      .delete("/favourite/" + favourite_id, getAuthorizationToken())
      .then(setSuccess("successfully deleted refresh the page"))
      .catch((error) =>
        setError(error.response?.data?.error || "Error occured"),
      );
  };

  return (
    <div>
      <p>{error}</p>
      <div className="card-wrapper">
        {records.map((favourite, index) => (
          <div className="card" key={index}>
            <h3>{favourite.coffee.name}</h3>
            <p>Brand: {favourite.coffee.brand}</p>
            <p>Type: {favourite.coffee.type}</p>
            <p>Description: {favourite.coffee.description}</p>
            <p>Cost: ${favourite.coffee.cost}</p>
            <p>Rating: {favourite.coffee.rating}/5</p>
            <div>
              <button onClick={() => deleteFavourite(favourite._id, index)}>
                Delete Favourite
              </button>
            </div>
          </div>
        ))}
        <p className="success">{Success}</p>
      </div>
    </div>
  );
}

export default Favourites;
