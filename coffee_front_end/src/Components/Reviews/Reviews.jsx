import "./Reviews.css";
import React, { useState, useEffect } from "react";
import StarRate from "../StarRate/StarRate";

function Reviews() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("https://buzz-my-day-app-xaqh.onrender.com/review")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="star-rate-container">
        <StarRate />
      </div>
      <div className="card-wrapper-reviews">
        {records.map((review, index) => (
          <div className="card-reviews" key={index}>
            <h3>{review.displayname}</h3>

            <p>Rating: {review.rating}/5</p>
            <p>{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
