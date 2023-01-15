import "./nav.css";
import "bootstrap/dist/css/bootstrap.css";
import { useState, useLayoutEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../provider/ThemeProvider";
import ReactSwitch from "react-switch";
import { FaLightbulb } from "react-icons/fa";
import LOGO from "../assets/logo_.png";

export default function NavBar() {
  const [variant, setVariant] = useState("light");
  const { theme, toggleTheme } = useThemeContext();

  useLayoutEffect(() => {
    if (theme === "dark") {
      setVariant("dark");
    } else {
      setVariant("light");
    }
  }, [theme]);

  return (
    <div id={theme}>
      <Navbar
        className="nav"
        collapseOnSelect
        sticky="top"
        expand="sm"
        variant={variant}
      >
        <Navbar.Brand as={Link} to="/aboutMe">
          <img
            className="logo"
            src={LOGO}
            width={65}
            height={65}
            alt="website logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          className="nav-icon"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="nav-links d-flex justify-content-evenly"
        >
          <Nav className="nav-pos flex-wrap">
            <Nav.Link className="a-link" as={Link} to="/aboutMe" eventKey="1">
              About Me
            </Nav.Link>

            <Nav.Link className="a-link" as={Link} to="/skills" eventKey="2">
              Skills
            </Nav.Link>

            <NavDropdown className="a-link" eventKey="3" title="Projects">
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/projects/major"
                eventKey="3.1"
              >
                Major
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/projects/minor"
                eventKey="3.2"
              >
                Minor
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="a-link" eventKey="4" title="Testimonials">
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/testimonials/mentors"
                eventKey="4.1"
              >
                Mentors
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item
                className="a-link"
                as={Link}
                to="/testimonials/peers"
                eventKey="4.2"
              >
                Peers
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link className="a-link" as={Link} to="/socials" eventKey="5">
              Socials
            </Nav.Link>

            <Nav.Link eventKey="6">
              <div className="switch">
                <label style={{ paddingRight: "5px" }}>
                  {theme === "light" ? (
                    <FaLightbulb size={25} color="#fdfe02" />
                  ) : (
                    <FaLightbulb size={25} color="black" />
                  )}
                </label>
                <ReactSwitch
                  onChange={toggleTheme}
                  checked={theme === "light"}
                  onColor="#eed9c4"
                  offColor="#5d5d5d"
                  activeBoxShadow="0 0 2px 3px #fdfe02"
                />
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
