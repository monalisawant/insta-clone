import React from "react";
// import PIC from "../Pic/pic1.png";
import heart from "../Pic/heart.png";
import share from "../Pic/share.png";
import "../CSS/postview.css";
import { useState, useEffect } from "react";
const PostView = () => {
  const [user, setuser] = useState([]);
  let API = "/postview";
  const fetchapi = async (url) => {
    try {
      const res = await fetch(url);
      const resp = await res.json();
      setuser(resp.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchapi(API);
  }, []);

  return (
    <>
    <div className="grid-container">
            {
              user.map(curele => {
              return (
                  <div className="Post">
                    <div>
                      <div className="dot clr2">...</div>
                      <div className="first">
                        <span className="lmargin Bold clr1">{curele.Namee}</span>
                        <span className="lmargin clr2">{curele.Location}</span>
                      </div>
                    </div>
                    <div>
                      <div className="Image">
                        <img src={curele.File} alt="Pic"  />
                      </div>
                    </div>
                    <div>
                      <div className="dates">
                        <span className="clr1">{curele.fulldate}</span> 
                      </div>
                      <div>
                        <span className="lmargin">
                          <img src={heart} alt="Heart " />
                        </span>
                        <span className="lmargin">
                          <img src={share} alt="share " />
                        </span>
                      </div>
                      <div className="lmargin">
                        <span className="clr2">{curele.like + " like"}</span>
                      </div>

                      <div className="lmargin font1">
                        <h1>{curele.Description}</h1>
                      </div>
                    </div>
                  </div>
              );
            })}
        </div>
    </>
  );
};
export default PostView;
