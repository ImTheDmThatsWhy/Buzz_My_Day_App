import "./StarRate.css";
import React, { useState, useEffect } from "react";
import Star from "./star.svg";

function StarRate() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [records, setRecords] = useState([]);
  const [selectedCoffee, setSelectedCoffee] = useState("");

  useEffect(() => {
    fetch("https://buzz-my-day-app-xaqh.onrender.com/coffee")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  const handleCoffeeChange = (e) => {
    setSelectedCoffee(e.target.value);
  };

  return (
    <form>
      <div className="App">
        {[...Array(5)].map((star, index) => {
          const currentRating = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => setRating(currentRating)}
              />
              <img
                className={`star ${
                  currentRating <= (hover || rating)
                    ? "star-active"
                    : "star-inactive"
                }`}
                src={Star}
                size={50}
                style={{
                  filter:
                    currentRating <= (hover || rating)
                      ? "invert(70%) sepia(84%) saturate(1200%) hue-rotate(358deg) brightness(105%) contrast(101%)"
                      : "grayscale(100%)",
                }}
                onClick={() => setRating(currentRating)}
                onMouseEnter={() => setHover(currentRating)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}

        <p>Your rating is {rating}</p>

        <div className="coffee-dropdown">
          <label htmlFor="coffee-select">Select Coffee Brand: </label>
          <select
            id="coffee-select"
            value={selectedCoffee}
            onChange={handleCoffeeChange}
          >
            <option value="">-- Select a coffee --</option>
            {records.map((coffee, index) => (
              <option key={index} value={coffee.brand}>
                {coffee.name} - {coffee.brand}
              </option>
            ))}
          </select>
        </div>

        <div className="input-box-star">
          <label>Description</label>
          <textarea
            name="message"
            id=""
            className="field-mess"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}

export default StarRate;
