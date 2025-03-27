import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Header.css"; 

function AdminMenu() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar bg="success" variant="dark" expand="lg" className="px-3">
        <Container fluid>
          <Navbar.Brand className="fw-bold fs-4 text-warning">
            Expense Management Admin Menu
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            
              <NavDropdown title="Customer" className="fw-bold">
                <NavDropdown.Item onClick={() => navigate("/customer-list")}>
                  Customer List
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/current-customer")}>
                  Current Customer List
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Category" className="fw-bold">
                <NavDropdown.Item onClick={() => navigate("/category-add")}>
                  Add Category
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/admin-category-list")}>
                  List Category
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link onClick={() => navigate("/reports")} className="fw-bold">
                Expense Report
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/")} className="fw-bold text-danger">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminMenu;
