import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function CustomerMenu() {
    const navigate = useNavigate();
    const [customerId, setCustomerId] = useState();
   
    useEffect(() => {
        const storedCustomer = JSON.parse(localStorage.getItem("customerId"));
        if (storedCustomer && storedCustomer.customerId) {
            setCustomerId(storedCustomer.customerId);
        }
    }, []);

    return (
        <>
            <Navbar bg="success" variant="dark" expand="lg" className="px-3">
                <Container fluid>
                    <Navbar.Brand className="fw-bold fs-4 text-warning">
                        Expense Management Customer Menu
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Customer" className="fw-bold">
                                <NavDropdown.Item onClick={() => navigate("/customer-add")}>
                                    Customer Registrations
                                </NavDropdown.Item>
                                <NavDropdown.Item 
                                    onClick={() => navigate(`/customer-details/${customerId}`)}
                                >
                                    Customer Details
                                </NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Expense" className="fw-bold">
                                <NavDropdown.Item onClick={() => navigate("/expense-entry")}>
                                    Expense Entry
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/customer-category-list")}>
                                    Category List
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/expense-report")}>
                                    Expense Report
                                </NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link onClick={() => { localStorage.clear(); navigate("/"); }} 
                                className="fw-bold text-danger">
                                Logout
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default CustomerMenu;