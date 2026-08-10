import { useState } from "react";
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
import { NavLink as RouterNavLink } from "react-router-dom";
import { APP_BASE_PATH } from "../../config/appConfig";

function Navbar2() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand tag={RouterNavLink} to="/">
          <img
            alt="logo"
            src={`${APP_BASE_PATH}ecoLearn.svg`}
            style={{
              height: 40,
              width: 40,
              marginRight: "10px",
            }}
          />
          EcoLearn
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/tools">
                Tools
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={RouterNavLink} to="/resources">
                Resources
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/projects">
                Projects
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/impact/">Impact</NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Extra
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={RouterNavLink} to="/aboutUs">
                  About Us
                </DropdownItem>
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
