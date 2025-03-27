import React,{ useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../../LoginView.css';
import {validateUser} from '../../Services/LoginService';
const LoginPage=()=>{
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const checkLogin=(e)=>{
        e.preventDefault();
        
         validateUser(username,password).then((response)=>{
         let category=String(response.data);
         
          if(category==="Admin")
              navigate('/AdminMenu');
        else if(category==="Customer")
             navigate('/CustomerMenu');
        else
           alert("Wrong Userid/Password");
        });
    }
    const registerNewUser=(e)=>{
        navigate('/Register');
}
    return(
        <div 
            className="login-background" 
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
                <h2 style={{color:"white"}}><u>Login Page</u></h2>
                <br />
                <form onSubmit={checkLogin}>
                    <div className="form-group text-start">
                        <label>User Name:</label>
                        <input 
                            type="text"
                            placeholder="Enter username" 
                            className="form-control"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <div className="form-group mt-3 text-start">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Enter Password"
                            className="form-control"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", color: "#fff", border: "1px solid #ccc" }}
                        />
                    </div>
                    <br />
                    <button className="btn w-100" type="submit" style={{ backgroundColor: "#007bff", color: "#fff" }}>Submit</button>
                </form>
                <br />
                <button className="btn w-100" onClick={registerNewUser} style={{ backgroundColor: "#17a2b8", color: "#fff" }}>Register New User</button>
            </div>
        </div>
        
    );
}

    
export default LoginPage;