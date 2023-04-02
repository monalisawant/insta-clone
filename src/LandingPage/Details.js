import React from "react";
import "../CSS/design.css";
import { useHistory } from "react-router-dom";
import { useState } from "react";


const Details = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    Namee: "",
    Location: "",
    Description: "",
  });
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const PostData = async (e) => {
    e.preventDefault();
      const {  Namee, Location, Description } = user;
    const res = await fetch("/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Namee,
        Location,
        Description,
      }),
    });

    if ( !Namee || !Location || !Description) {
      window.alert("Empty Field");
    }
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      history.push("/PostView");
    }
  };
  return (
    <>
      <form method="post" enctype="multipart/form-data">
        <div className="design">
          <div className="filee" >
            <input
              type="file"
              name="file"
              id="File"
              required
              placeholder="No File Chosen"
            />
          </div>
          <div className="two">
            <input
              type="text"
              name="Namee"
              id="Namee"
              placeholder="Author"
              value={user.Namee}
              onChange={handleInputs}
              required
            />
            <input
              type="text"
              name="Location"
              id="Location"
              placeholder="Location"
              value={user.Location}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="de">
            <input
              type="text"
              name="Description"
              id="Description"
              placeholder="Description"
              value={user.Description}
              onChange={handleInputs}
              required
            />
          </div>
          <div className="Final">
            <input
              type="submit"
              value="Post"
              id="signup"
              className="btn btn-dark text-light border border-info"
              onClick={PostData}
              //   required
            />
          </div>
        </div>
      </form>
      <div>
      </div>
    </>
  );
};

export default Details;
