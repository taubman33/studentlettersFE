import React from "react";
import GH from "../Images/git-logo.png";

function Footer(props) {
  return (
    <div>
      <div className="foot-container">
        <div className="links">
          <div className="jeremy">
            <h4>Jeremy Taubman</h4>
            <a
              href="https://github.com/taubman33"
              target="blank"
              rel="noreferrer"
            >
              <img src={GH} height="80px" alt="Github" />
            </a>
          </div>
          <div className="nazeer">
            <h4>Nazeer Davis</h4>
            <a href=" " target="blank" rel="noreferrer">
              <img src={GH} height="80px" alt="Github" />
            </a>
          </div>
          <div className="michaelann">
            <h4>Michaelann Awesome</h4>
            <a
              href="https://github.com/michaelannawesome"
              target="blank"
              rel="noreferrer"
            >
              <img src={GH} height="80px" alt="Github" />
            </a>
          </div>
          <div className="kel">
            <h4>Kelpius Zannou</h4>
            <a
              href="https://github.com/KelpiusZ"
              target="blank"
              rel="noreferrer"
            >
              <img src={GH} height="80px" alt="Github" />
            </a>
          </div>
        </div>
        <div className="team">
          <h5>Squad&copy; 2021</h5>
        </div>
      </div>
    </div>
  );
}

export default Footer;
