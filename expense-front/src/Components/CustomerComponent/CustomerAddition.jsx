import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Card, Container } from "react-bootstrap";
import { generateCustomerId, saveCustomer, getCustomerStatusByUsername } from "../../Services/CustomerService";
import "../../LoginView.css";

const CustomerAddition = () => {
  const [customer, setCustomer] = useState({
    customerId: "",
    username:"A",
    customerName: "",
    address: "",
    mobile: "",
    occupation: "",
    status:"A"
  });

  const [newId, setNewId] = useState("");
  const navigate = useNavigate();

  const setCustomerId = () => {
    generateCustomerId().then((response) => {
      setNewId(response.data);
    }).catch(error => {
      console.error("Error generating customer ID:", error);
    });
  };

  const checkStatus = () => {
    getCustomerStatusByUsername().then((response) => {
      if (response.data === true) {
        alert("Customer is already registered.");
        navigate("/CustomerMenu");
      } else {
        setCustomerId();
      }
    }).catch(error => {
      console.error("Error checking customer status:", error);
    });
  };

  useEffect(() => {
    checkStatus();
  }, []);


  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setCustomer((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const customerSave = (event) => {
    event.preventDefault();
    const customerData = { ...customer, customerId: newId };

    saveCustomer(customerData).then(() => {
      alert("New Customer has been added.");
      navigate("/CustomerMenu");
    }).catch(error => {
      console.error("Error saving customer:", error);
    });
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: "30rem", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
        <Card.Body>
          <Card.Title className="text-center mb-4 fs-3 fw-bold">New Customer Registration</Card.Title>
          <Form onSubmit={customerSave}>
            
            <Form.Group className="mb-3">
              <Form.Label>Customer ID:</Form.Label>
              <Form.Control type="text" value={newId} readOnly />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Customer Name:</Form.Label>
              <Form.Control type="text" name="customerName" value={customer.customerName} onChange={onChangeHandler} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Customer Address:</Form.Label>
              <Form.Control type="text" name="address" value={customer.address} onChange={onChangeHandler} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Customer Mobile:</Form.Label>
              <Form.Control type="text" name="mobile" value={customer.mobile} onChange={onChangeHandler} required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Customer Occupation:</Form.Label>
              <Form.Control type="text" name="occupation" value={customer.occupation} onChange={onChangeHandler} required />
            </Form.Group>

            <div className="text-center">
              <Button variant="success" type="submit">
                Save
              </Button>
            </div>

          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CustomerAddition;
