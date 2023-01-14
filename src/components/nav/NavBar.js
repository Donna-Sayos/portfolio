// import { useState, useLayoutEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo_.png";
import "./nav.css";

export default function NavBar() {
  // const [variant, setVariant] = useState("light");
  
  // useLayoutEffect(() => {
  //   if (id === "dark") {
  //     setVariant("dark");
  //   } else {
  //     setVariant("light");
  //   }
  // }, [])

  return (
    <div id="dark">
      <Navbar
        className="nav"
        sticky="top"
        expand="sm"
        variant="dark"
        collapseOnSelect
      >
        <Navbar.Brand as={Link} to="/aboutMe">
          <img
            className="logo"
            src={LOGO}
            width={60}
            height={60}
            alt="website logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle className="nav-icon"/>
        <Navbar.Collapse className="nav-links justify-content-end">
          <Nav>
            <Nav.Link className="a-link" as={Link} to="/aboutMe">
              About Me
            </Nav.Link>

            <Nav.Link className="a-link" as={Link} to="/skills">
              Skills
            </Nav.Link>

            <NavDropdown
              className="a-link"
              as={Link}
              to="/projects"
              title="Projects"
            >
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/projects/major"
              >
                Major
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/projects/minor"
              >
                Minor
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="a-link"
              as={Link}
              to="/testimonials"
              title="Testimonials"
            >
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/testimonials/mentors"
              >
                Mentors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/testimonials/peers"
              >
                Peers
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="a-link" as={Link} to="/socials">
              Socials
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
