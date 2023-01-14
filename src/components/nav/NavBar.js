import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import LOGO from "../assets/logo_.png";
import "./nav.css";

export default function NavBar() {
  return (
    <>
      <Navbar
        id="dark"
        className="nav"
        sticky="top"
        expand="sm"
        variant="dark"
        collapseOnSelect
      >
        <Navbar.Brand>
          <Link to="/aboutMe">
            <img
              className="logo"
              src={LOGO}
              width={60}
              height={60}
              alt="website logo"
            />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link>
              <Link className="a-link" to="/aboutMe">About Me</Link>
            </Nav.Link>

            <Nav.Link>
              <Link className="a-link" to="/skills">Skills</Link>
            </Nav.Link>

            <NavDropdown className="a-link" title="Projects">
              <NavDropdown.Item>
                <Link to="/projects/hangOut">HangOut Mobile App</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/projects/ready-to-roomba">Ready-to-Roomba</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/projects/chat-app">Chat App</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to="/projects/price-tracker">Price Tracker</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown className="a-link" title="Testimonials">
              <NavDropdown.Item>
                <Link to="/testimonials/mentors">Mentors</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                <Link to="/testimonials/peers">Peers</Link>
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link>
              <Link className="a-link" to="/socials">Socials</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
