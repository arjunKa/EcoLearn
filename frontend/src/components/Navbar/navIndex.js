import React from "react";
import { 
    Nav,
    NavLink,
    Hamburger,
    NavMenu,
} from "./navbarElements";


const Navbar = () => {
    return (
        <>
            <Nav>
                <Hamburger />

                <NavMenu>
                    <NavLink to= "/calculator">
                        Calculator
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
                    {/* <NavLink to= "/home">
                        Home
                    </NavLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;