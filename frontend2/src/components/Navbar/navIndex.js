import React from "react";
import { 
    Nav,
    NavLink,
    Hamburger,
    NavMenu,
    Logo,
    LogoNavLink,
} from "./navbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <Logo>
                    <LogoNavLink to= "/">
                        EcoLearning
                    </LogoNavLink>
                </Logo>
                <Hamburger />
                <NavMenu>
                    <NavLink to= "/tools">
                        Tools
                    </NavLink>
                    <NavLink to= "/projects">
                        Projects
                    </NavLink>
                    <NavLink to= "/impact">
                        Impact
                    </NavLink>
                    <NavLink to= "/resources">
                        Resources
                    </NavLink>
                    <NavLink to= "/admin">
                        Admin
                    </NavLink>
                    {/* <NavLink to= "/home">
                        Home
                    </NavLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;