import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function Navbar2(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">
          {/* <div
            style={{
              paddingRight: "10px",
            }}
          > */}
          <img
            alt="logo"
            src="/ecoLearn.svg"
            style={{
              height: 40,
              width: 40,
              marginRight: "10px",
            }}
          />
          {/* </div> */}
          EcoLearn
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/tools/">Tools</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/resources/">Resources</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects/">Projects</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/impact/">Impact</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Extra
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/aboutUs/">About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>A C4 Project</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbar2;
