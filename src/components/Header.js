import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, Collapse, NavItem, NavLink} from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openNavbar = this.openNavbar.bind(this);
    }

    openNavbar(){
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar expand="md">
                    <NavbarBrand href="/"> 
                        {/* <img src="./assets/icon/ICON.ico" className="icon"/> */}
                        <NavLink href="/">
                            HOME ICON
                        </NavLink>
                    </NavbarBrand>
                    <NavbarToggler onClick = {this.openNavbar}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink class="nav-link" href="/listings">
                                    LISTINGS
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink class="nav-link" href="/messages">
                                    MESSAGE
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink class="nav-link" href="/contact">
                                    CONTACT
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink class="nav-link" href="/">
                                    SIGN IN
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>

        );
    }
}
 
export default Header;