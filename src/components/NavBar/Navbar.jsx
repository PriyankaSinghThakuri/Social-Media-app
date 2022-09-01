import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "../NavBar/Navbar.css";
import {
  faBell,
  faGear,
  faHomeLg,
  faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" className="Brand">
          KonnectTeam
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="searchbox"
              aria-label="Search"
            />
            <Button variant="outline-success" className="searchbtn">
              Search
            </Button>
          </Form>
          <div className="navicons">
            <Nav.Link href="/" className="home_btn">
              <FontAwesomeIcon icon={faHomeLg} size="2x" className="homeicon" />
            </Nav.Link>
            <Nav.Link href="/" className="newpost_btn">
              <FontAwesomeIcon
                icon={faPlusSquare}
                size="2x"
                className="plusicon"
              />
            </Nav.Link>
            <Nav.Link href="/" className="notification_btn">
              <FontAwesomeIcon icon={faBell} size="2x" className="bellicon" />
            </Nav.Link>
            <Nav.Link href="/" className="setting_btn">
              <FontAwesomeIcon icon={faGear} size="2x" className="gearicon" />
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
