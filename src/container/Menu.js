import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from "react-router-dom";

const Menu = () => {
    const user = localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : false
    const isAdmin = user ? user.email === process.env.REACT_APP_ADMIN_EMAIL ? true : false : false;
    const logout = () => {
        localStorage.removeItem('user');
        window.location.href = "/";
    }
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/"> Blogs </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {user ?
                                <>
                                    <Nav.Link as={Link} to="/add">Add</Nav.Link>
                                    <Nav.Link as={Link} to="/myblog">MY Blog</Nav.Link>
                                    {isAdmin && <Nav.Link as={Link} to="/allblog">All Blog</Nav.Link>}
                                    <Nav.Link onClick={logout}>Logout</Nav.Link>

                                </>
                                : <>
                                    <Nav.Link as={Link} to="/signIn">SignIn</Nav.Link>
                                    <Nav.Link as={Link} to="/signUp">SignUp</Nav.Link>
                                </>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Menu
