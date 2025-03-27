import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCustomerById, getCustomerByUsername } from "../../Services/CustomerService";


const CustomerDetails = () => {
   
    const [customer, setCustomer] = useState({
        customerId:"",
        username:"",
        customerName:"",
        address:"",
        email:"",
        mobile:0,
        occupation:"",
        status:""
    });
    let navigate=useNavigate();
    const setCustomerData=() =>{
        getCustomerByUsername().then((response)=>{
            setCustomer(response.data);
        });
    }
    

    useEffect(() => {
        setCustomerData();
         
    }, []);

    

    return (
        <div className="customer-container">
            <h2>Customer Details</h2>
            {customer ? (
                <div>
                    <p><strong>ID:</strong> {customer.customerId}</p>
                    <p><strong>Name:</strong> {customer.customerName || "N/A"}</p>
                    <p><strong>Email:</strong> {customer.email || "N/A"}</p>
                    <p><strong>Mobile:</strong> {customer.mobile || "N/A"}</p>
                    <p><strong>Address:</strong> {customer.address || "N/A"}</p>
                    <p><strong>Occupation:</strong> {customer.occupation || "N/A"}</p>
                </div>
            ) : (
                <p>No customer found</p>
            )}
            
            <button className="back-btn" onClick={() => navigate("/CustomerMenu")}>
                Back to Customer Menu
            </button>
        </div>
    );
};

export default CustomerDetails;