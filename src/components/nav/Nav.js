import React from "react";
import "./nav.css";
// import "bootstrap/dist/css/bootstrap.css";
import { Navbar } from "react-bootstrap";
import LOGO from "../assets/logo_.png";

export default function Nav() {
  return (
    <div>
      <Navbar
        id="dark"
        className="nav"
        sticky="top"
        expand="sm"
        collapseOnSelect
      >
        <Navbar.Brand>
          <img className="logo" src={LOGO} height={60} width={60} />
        </Navbar.Brand>
      </Navbar>
      <div className="content">Navbar</div>
    </div>
  );
};
