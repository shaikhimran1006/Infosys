import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCustomerById, updateCustomer } from "../../Services/CustomerService";
import { Container, Card, Form, Button, Alert, Spinner, Row, Col } from "react-bootstrap";
import "../../LoginView.css";

const CustomerUpdate = () => {
  const { customerId } = useParams();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    customerId: "",
    username: "",
    customerName: "",
    address: "",
    email: "",
    mobile: "",
    occupation: "",
    status: "true",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    getCustomerById(customerId)
      .then((response) => {
        setCustomer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching customer data:", error);
        setError("Failed to load customer data.");
        setLoading(false);
      });
  }, [customerId]);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCustomer((prevCustomer) => ({ ...prevCustomer, [name]: value }));
  };

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const isValidMobile = (mobile) => /^[0-9]{10}$/.test(mobile);

  const handleUpdate = (event) => {
    event.preventDefault();

    if (!isValidEmail(customer.email)) {
      setError("Invalid email format.");
      return;
    }
    if (!isValidMobile(customer.mobile)) {
      setError("Mobile number must be 10 digits.");
      return;
    }

    setUpdating(true);

    updateCustomer(customer)
      .then(() => {
        alert("Customer updated successfully!");
        navigate("/customer-list");
      })
      .catch((error) => {
        console.error("Error updating customer:", error);
        setError("Update failed. Please try again.");
      })
      .finally(() => {
        setUpdating(false);
      });
  };

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="primary" />
      </Container>
    );
  }

  return (
    <Container className="d-flex justify-content-center mt-4">
      <Card style={{ width: "28rem", padding: "15px", borderRadius: "8px", boxShadow: "0 0 8px rgba(0,0,0,0.1)" }}>
        <Card.Body>
          <Card.Title className="text-center mb-3 fs-5 fw-semibold text-primary">Update Customer</Card.Title>

          {error && <Alert variant="danger" className="text-center p-1">{error}</Alert>}

          <Form onSubmit={handleUpdate}>
            <Row className="mb-2">
              <Col>
                <Form.Label className="small">Customer ID</Form.Label>
                <Form.Control type="text" size="sm" value={customer.customerId} readOnly />
              </Col>
              <Col>
                <Form.Label className="small">Username</Form.Label>
                <Form.Control type="text" size="sm" value={customer.username} readOnly />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Label className="small">Name</Form.Label>
                <Form.Control type="text" size="sm" name="customername" value={customer.customerName} onChange={onChangeHandler} required />
              </Col>
              <Col>
                <Form.Label className="small">Address</Form.Label>
                <Form.Control type="text" size="sm" name="address" value={customer.address} onChange={onChangeHandler} required />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Label className="small">Email</Form.Label>
                <Form.Control type="email" size="sm" name="email" value={customer.email} onChange={onChangeHandler} required />
              </Col>
              <Col>
                <Form.Label className="small">Mobile</Form.Label>
                <Form.Control type="text" size="sm" name="mobile" value={customer.mobile} onChange={onChangeHandler} required />
              </Col>
            </Row>

            <Row className="mb-2">
              <Col>
                <Form.Label className="small">Occupation</Form.Label>
                <Form.Control type="text" size="sm" name="occupation" value={customer.occupation} onChange={onChangeHandler} required />
              </Col>
              <Col>
                <Form.Label className="small">Status</Form.Label>
                <Form.Select size="sm" name="status" value={customer.status} onChange={onChangeHandler} required>
                  <option value="true">true</option>
                  <option value="false">false</option>
                </Form.Select>
              </Col>
            </Row>

            <Button variant="primary" type="submit" size="sm" className="w-100 mt-2" disabled={updating}>
              {updating ? "Updating..." : "Update"}
            </Button>

            <Button variant="secondary" size="sm" className="w-100 mt-2" onClick={() => navigate("/customer-list")}>
              Back
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CustomerUpdate;
