import React, { Component } from 'react';
import { 
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Nav,
    Collapse,
    NavItem,
    NavLink,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from 'reactstrap';

import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props){
        super(props);

        this.state={
            isNavOpen: false,
            isModalOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    openNavbar(){
        this.setState({ isOpen: !this.state.isOpen });
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    handleLogin = (event) => {
        this.toggleModal();
        this.props.loginUser({email: this.username.value, password: this.password.value});
        event.preventDefault();
    }

    handleLogout = () =>{
        this.props.logoutUser();
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
                                <NavLink class="nav-link" href="/post_listing">
                                    POST LISTING
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink class="nav-link" href="/contact">
                                    CONTACT
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                { !this.props.auth.isAuthenticated ?
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                        {this.props.auth.isFetching ?
                                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            : null
                                        }
                                    </Button>
                                    :
                                    <div>
                                    <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                    <Button outline onClick={this.handleLogout}>
                                        <span className="fa fa-sign-out fa-lg"></span> Logout
                                        {this.props.auth.isFetching ?
                                            <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                            : null
                                        }
                                    </Button>
                                    </div>
                                }
                                {/* <Button onClick={this.toggleModal}>
                                    SIGN IN
                                </Button> */}
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>
                        Login
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Email</Label>
                                <Input type="text" id="username" name="username" innerRef={(input) => this.username = input}/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password" innerRef={(input) => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input}/>
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <FormGroup>
                                <Link to="/signup"> Don't have an account? Sign Up! </Link>
                            </FormGroup>
                            <Button className="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>

        );
    }
}
 
export default Header;