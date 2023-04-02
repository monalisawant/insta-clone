import React from "react";
import "../CSS/Header.css";
import {Link} from 'react-router-dom';
import logo from '../Pic/icon.svg'
export default function Header() {
  return (
    <>
      <header>
        <div className="head">
          <div className="content">
          <img src={logo} alt="Logo" />
          <Link to="/" className="name">
 <h1>Instaclone</h1>
          </Link>
           
          </div>
          <Link to="/Details">
            <div className="cam"></div>
          </Link>
        </div>
      </header>
    </>
  );
}
