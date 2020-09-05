import React from "react";
import "./pages.css";
import "./home.css";
import image from "./jamesgoingnuts.jpg";

function Home() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <div className="header-container">
        <img
          style={{
            filter: "brightness(50%)",
            height: "750px",
            width: "100%",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
          src="https://today.tamu.edu/wp-content/uploads/2019/10/20190806_TAMU_Arerial_brs0070-Edit-2400.jpg"
        />
        <div className="header-text">
          <h1 className="header-h1">Find what you need here!</h1>
          <p className="header-p">
            We provide a user friendly interface to help you learn more about
            your professors.
          </p>
        </div>
      </div>
      <div className="aboutUs-content">
        <div className="aboutUs-content-text">
          <h1 className="aboutUs-content-text-h1">TAMU Prof</h1>
          <p className="aboutUs-content-text-p">
            Blah Blah blah blah blah blah blah blah Blah Blah blah blah blah
            blah blah blah Blah Blah blah blah blah blah blah blah Blah Blah
            blah blah blah blah blah blah Blah Blah blah blah blah blah blah
            blah Blah Blah blah blah blah blah blah blah Blah Blah blah blah
            blah blah blah blah Blah Blah blah blah blah blah blah blah
          </p>
          <h1 className="aboutUs-content-text-h1">About Us</h1>
          <p className="aboutUs-content-text-p">
            Blah Blah blah blah blah blah blah blah Blah Blah blah blah blah
            blah blah blah Blah Blah blah blah blah blah blah blah Blah Blah
            blah blah blah blah blah blah Blah Blah blah blah blah blah blah
            blah Blah Blah blah blah blah blah blah blah Blah Blah blah blah
            blah blah blah blah Blah Blah blah blah blah blah blah blah
          </p>
          <h1 className="aboutUs-content-text-h1">Contact us:</h1>
          <p className="aboutUs-content-text-p">
            Dhruv: Dhruv414@tamu.edu
            <br />
            James: james.wang@tamu.edu
            <br />
            Pavan: pmotupalli14@tamu.edu
            <br />
            Arjun: adg516@tamu.edu
          </p>
        </div>
        <div className="aboutUs-content-image">
          <div className="aboutUs-content-image-container">
            <img
              src={image}
              style={{ height: "500px", width: "auto" }}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
