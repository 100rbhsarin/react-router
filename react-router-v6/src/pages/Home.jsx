import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <div className="animated-book"></div>
      <div className="falling-table"></div>
      <div className="falling-coco"></div>
      <div className="falling-geraf"></div>
  
      <div class="animated-text">
  <p>I WAS BORN WITH A READING LIST I WILL NEVER FINISH</p>
</div>

      {/* <div className="falling-chair"></div> */}
      <a href="/movie" className="cta-button">My Books</a>
    </div>
  );
};
