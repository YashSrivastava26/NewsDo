import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    const navigate = useNavigate();

    const handleOnSubmit = () => {
        console.log(search.value)
        navigate(`/search/${search.value}`);
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/business">Business</Nav.Link>
                        <Nav.Link as={Link} to="/entertainment">Entertainment</Nav.Link>
                        <Nav.Link as={Link} to="/health">Health</Nav.Link>
                        <Nav.Link as={Link} to="/science">Science</Nav.Link>
                        <Nav.Link as={Link} to="/sports">Sports</Nav.Link>
                        <Nav.Link as={Link} to="/technology">Technology</Nav.Link>
                    </Nav>
                    <div className="form-inline my-2 my-lg-0 d-flex">
                        <input className="form-control mr-sm-2" id='search' type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"  onClick={()=>{return handleOnSubmit()}} >Search</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

