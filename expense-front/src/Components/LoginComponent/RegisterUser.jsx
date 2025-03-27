import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';
import '../../LoginView.css';
import {registerUser, registerNewUser} from '../../Services/LoginService';
const RegisterUser=()=>{
    const [expenseUser, setExpenseUser] = useState({
        username: "",
        password: "",
        email: "",
        category:"",
        
    });
    const [password2,setPassword2]=useState("");
    let navigate=useNavigate();

    const saveNewUser = (event) => {
        event.preventDefault();
        if(expenseUser.password.length<5 || expenseUser.password.length>10){
            alert("Password must be between 5 to 10 characters long");
            return;
        }
       if(expenseUser.password===password2){
             registerNewUser(expenseUser).then((response)=>{
               alert("User is registered successfully...Go For Login");
               navigate('/');    
             });
        }
        else{
             alert("Passwords are not matched");
            return;
        }
      };
      const  onChangeHandler = (event) =>{
        event.persist();
        const name = event.target.name;
            const value = event.target.value;
           setExpenseUser(values =>({...values, [name]: value }));
         };

    return (
         <div 
            className="register-background" 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                minHeight: "100vh", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center" 
            }}
        >
            <div 
                className="card" 
                style={{ 
                    width: "400px", 
                    backgroundColor: "rgba(255, 255, 255, 0.1)",  // Transparent effect
                    backdropFilter: "blur(10px)", 
                    borderRadius: "10px", 
                    padding: "20px", 
                    color: "#ffffff", // White text for contrast
                    textAlign: "center", 
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)"
                }}
            >
                <h2 style={{color:"white"}}><u>New User Registration</u></h2>
                <br />
                <form onSubmit={saveNewUser}>
                    <div className="form-group text-start">
                        <label>User Name:</label>
                        <input 
                            type="text" 
                            placeholder="Enter username" 
                            className="form-control" 
                            name="username"
                            value={expenseUser.username} 
                            onChange={onChangeHandler} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            name="password"
                            value={expenseUser.password} 
                            onChange={onChangeHandler} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Retype/Confirm Password:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            value={password2} 
                            onChange={(event) => setPassword2(event.target.value)} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>User Email:</label>
                        <input 
                            type="email" 
                            placeholder="Enter email" 
                            className="form-control" 
                            name="email"
                            value={expenseUser.email} 
                            onChange={onChangeHandler} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Select Category:</label>
                        <input 
                            list="types" 
                            name="category" 
                            className="form-control" 
                            value={expenseUser.category} 
                            onChange={onChangeHandler} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                        <datalist id="types">
                            <option value="Customer" />
                            <option value="Admin" />
                        </datalist>
                    </div>
                    <br />
                    <button className="btn w-100" type="submit" style={{ backgroundColor: "#007bff", color: "#fff" }}>Submit</button>
                </form>
            </div>
        </div>
    );
}
export default RegisterUser;