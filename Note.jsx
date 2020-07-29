import React from "react";

import * as ReactBootStrap from "react-bootstrap";
import logo from "./Capture.png";


function Note(){
  return <div className="note">
  <div className="content container inverse">
  <div className="illustration"><img className="myImg"src={logo} alt="bohoo"/></div>
  <header className="header">
  <div className="kicker">
  <p style={{color:"orange"}}className="work">CONECTING THE DISCONNECTED</p>
  </div>
  <h1 style={{fontSize:"50px"}} className="headline"><code className="myCode">Vyorius</code> brings unmanned robots <code className="myCode">together</code>,wherever they are</h1>
  <p className="copy">With all of the operations,commanding and maintenance tools in one place,unmanned vehicles will stay connected and productive no matter where you're Delivering</p>
  <div>
  <div className="mb-2">
  <ReactBootStrap.Button className="tryme" size="lg" variant="warning">Try Vyorius</ReactBootStrap.Button>{' '}
  <ReactBootStrap.Button className="tryme" size="lg" variant="outline-warning">Learn More</ReactBootStrap.Button>{' '}
  </div>
  </div>



  </header>
  </div>
  </div>
}

  export default Note;
