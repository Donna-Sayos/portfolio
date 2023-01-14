import { useState, useLayoutEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useThemeContext } from "../../provider/ThemeProvider";
import ReactSwitch from "react-switch";
import { FaLightbulb } from "react-icons/fa";
import LOGO from "../assets/logo_.png";
import "./nav.css";

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
        expand="sm"
        variant={variant}
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

        <Navbar.Toggle className="nav-icon" />
        <Navbar.Collapse className="nav-links justify-content-end">
          <Nav className="nav-pos d-flex flex-wrap">
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

            <Nav.Link>
              <div className="switch">
                <label style={{ paddingLeft: "5px", paddingRight: "5px" }}>
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
