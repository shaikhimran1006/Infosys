import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getExpensesByCustomerId } from "../../Services/ExpenseService";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerExpenses = () => {
  const { customerId } = useParams();
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExpenses = async () => {
      try {
        const response = await getExpensesByCustomerId(customerId);
        setExpenses(response.data);
      } catch (error) {
        console.error("Error fetching expenses:", error);
        setError("Failed to fetch expenses");
      } finally {
        setLoading(false);
      }
    };
    fetchExpenses();
  }, [customerId]);

  if (loading) return <p className="text-center text-white">Loading...</p>;
  if (error) return <p className="text-danger text-center">{error}</p>;
  if (expenses.length === 0) return <p className="text-center text-white">No expenses found for this customer.</p>;

  return (
    <div
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')",
        backgroundSize: "cover",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
      }}
    >
      <h2 className="text-center text-warning mb-4">Expenses for Customer {customerId}</h2>
      <hr style={{ height: "3px", borderWidth: 0, backgroundColor: "#f8f9fa" }} />
      <div className="table-responsive">
        <table
          className="table table-bordered mt-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.6)", color: "#ffffff" }}
        >
          <thead style={{ backgroundColor: "#1a1a2e", color: "#FFD93D" }}>
            <tr>
              <th>Expense ID</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.expenseNumber}>
                <td>{expense.expenseNumber}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.categoryId}</td>
                <td>{new Date(expense.expenseDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-center mt-4">
        <button
          onClick={() => navigate(-1)}
          className="btn"
          style={{
            backgroundColor: "#FFD93D",
            color: "#1a1a2e",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(255, 217, 61, 0.5)",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default CustomerExpenses;
