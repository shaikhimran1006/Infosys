import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./CustomerList.css";
import { getAllCustomers } from "../../Services/CustomerService";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    getAllCustomers()
      .then((response) => {
        setCustomers(response.data || []);
      })
      .catch((error) => {
        console.error("Error fetching customers:", error);
        setCustomers([]);
      });
  }, []);

  const returnBack = () => {
    if (location.state?.from === "customer") {
      navigate("/CustomerMenu");
    } else {
      navigate("/AdminMenu");
    }
  };

  const filteredCustomers = customers.filter((customer) =>
    (customer.customername || "").toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customer-container">
      <h2 style={{ fontWeight: "bold" }}>Customer List</h2>
      <input
        type="text"
        placeholder="Search by name..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {filteredCustomers.length > 0 ? (
        <table className="customer-table">
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Address</th>
              <th>Occupation</th>
              <th>Actions</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.customerId}>
                <td>{customer.customerId}</td>
                <td>{customer.customerName || "N/A"}</td>
                <td>{Array.isArray(customer.email) ? customer.email.join(", ") : customer.email || "N/A"}</td>
                <td>{customer.mobile || "N/A"}</td>
                <td>{customer.address ? customer.address : "N/A"}</td>
                <td>{customer.occupation || "N/A"}</td>
                <td>{customer.status}</td>
                <td>
                  <button 
                    className="edit-btn" 
                    onClick={() => navigate(`/customer-update/${customer.customerId}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-data">No customers found</p>
      )}
      <button className="back-btn" onClick={returnBack}>
        Back to {location.state?.from === "customer" ? "Customer Menu" : "Admin Menu"}
      </button>
    </div>
  );
};

export default CustomerList;
