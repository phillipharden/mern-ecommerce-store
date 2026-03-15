import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import Logo from "../../assets/images/logo-wht.png";

const Header = () => {
    return (
        <header>
            <Navbar bg='primary' variant='dark' expand='md' collapseOnSelect className="navbar-override">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/">
                            <img src={Logo} alt="Nazarite Beard Co" className="nav-logo" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>
                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <FaShoppingCart />Cart
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser />Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
