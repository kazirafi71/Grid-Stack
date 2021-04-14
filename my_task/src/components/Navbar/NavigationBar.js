import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import PersonIcon from "@material-ui/icons/Person";
import styles from "./Navbar.module.css";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        className={styles.nav__style}
        collapseOnSelect
        expand="sm"
        bg="light"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#Company">Company</Nav.Link>
            <Nav.Link href="#Find Candidate">Find Candidate</Nav.Link>
            <Nav.Link className={` ${styles.guide__style} pr-4`} href="#Guide">
              Guide
            </Nav.Link>
            <Nav.Link href="#hi">
              <PersonIcon />
              <span className='pl-2' style={{color:"#F15A29"}}>Hi, Elise!</span> 
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
