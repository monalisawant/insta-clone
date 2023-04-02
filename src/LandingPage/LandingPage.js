import React from "react";
import '../CSS/LandingPage.css'
import { Link } from "react-router-dom";
import photo from "../Pic/pic1.png";
export default function LandingPage() {
  return (
    <>
    <div className="post">
        <div className="image">
          <img src={photo} alt="pic" />
        </div>
        <div className="post-section">
          <div>10x Team 04</div>
          <div>
          <Link to="/PostView">
          <button className="but">Enter</button>
        </Link>
          </div>
        </div>
      </div>
    </>
  );
}
