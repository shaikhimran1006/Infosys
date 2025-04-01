import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getExpenseById, updateExpense } from "../../Services/ExpenseService";
import { displayAllCategories } from "../../Services/CategoryService";
import "../../LoginView.css";

const ExpenseUpdate = () => {
    const navigate = useNavigate();
    const { expenseId } = useParams();
    const [categories, setCategories] = useState([]);
    const [expense, setExpense] = useState({
        expenseNumber: "",
        categoryId: "",
        expenseDate: "",
        amount: "",
        description: "",
    });

    useEffect(() => {
        getExpenseById(expenseId)
            .then((response) => {
                setExpense(response.data);
            })
            .catch((error) => console.error("Error fetching expense details:", error));
    }, [expenseId]);

    useEffect(() => {
        displayAllCategories()
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("Error fetching categories:", error);
            });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setExpense((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateExpense(expenseId, expense)
            .then(() => {
                Swal.fire("Success", "Expense Updated Successfully!", "success");
                navigate(-1);
            })
            .catch((error) => console.error("Error updating expense:", error));
    };

    return (
        <div className="register-background" style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <div className="card" style={{
                width: "400px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: "10px",
                padding: "20px",
                color: "#ffffff",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
            }}>
                <h2 style={{ color: "rgba(234, 169, 39, 0.88)", fontSize: "30px" }}>
                    <u>Update Expense</u>
                </h2>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="form-group text-start">
                        <label>Expense Number:</label>
                        <input type="text" className="form-control" value={expense.expenseNumber} readOnly />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Category:</label>
                        <select className="form-control" name="categoryId" value={expense.categoryId} onChange={handleChange} required>
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category.categoryId} value={category.categoryId}>
                                    {category.categoryName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Expense Date:</label>
                        <input type="date" className="form-control" name="expenseDate" value={expense.expenseDate} onChange={handleChange} required />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Amount:</label>
                        <input type="number" className="form-control" name="amount" value={expense.amount} onChange={handleChange} required />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Description:</label>
                        <textarea className="form-control" name="description" value={expense.description} onChange={handleChange} required />
                    </div>
                    <br />
                    <button className="btn w-100" type="submit" style={{ backgroundColor: "#007bff", color: "#fff" }}>
                        Update Expense
                    </button>
                    <button className="btn w-100 mt-2" type="button" style={{ backgroundColor: "#ff6f61", color: "#fff" }} onClick={() => navigate(-1)}>
                        Return
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ExpenseUpdate;
