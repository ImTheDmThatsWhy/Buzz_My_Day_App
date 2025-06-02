import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="hero">
      <div>
        <div className="hero-header">
          <h1>Buzz My Day App</h1>
        </div>
        <div className="hero-blurb">
          <h4>Bringing a Buzz to your day!</h4>
        </div>
        <div className="hero-btns">
          <button>
            <h4>See More...</h4>
          </button>
          <button>
            <h4>Coffees</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
