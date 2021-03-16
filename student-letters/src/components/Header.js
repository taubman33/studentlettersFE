import React from "react";
import Nav from './Nav'

function Header(props) {
  return (
    <div className="App-header">
      {/* <div className="Header-title"> */}


    <div>
      <h1 className="text"> Letters to the Next Cohort</h1>

      <div className="Header-subtext">
        <h6 className="text sub"> From the 11/30-03/04 Cohort</h6>
      </div>
    </div> 

    
      <div className="navbar-container">
        <Nav/>
      </div>


    </div>
  );
}

export default Header;
