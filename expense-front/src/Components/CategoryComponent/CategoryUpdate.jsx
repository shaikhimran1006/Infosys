import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../../LoginView.css";
import { displayCategoryById, updateCategory } from "../../Services/CategoryService";

const CategoryUpdate = () => {
   
    const [category, setCategory] = useState({
        categoyId:0,
        categoryName: "",
        description: ""
    });

    const param=useParams();
    let navigate = useNavigate();
    const setCategoryData=()=>{
        displayCategoryById(param.categoryId).then((response)=>{
            setCategory(response.data);
        });
    }
    useEffect(() =>{
        setCategoryData();
    },[]);
    const returnBack=()=>{
        navigate('/admin-category-list');
    }

    const onChangeHandler=(event)=>{
        event.persist();
        const name=event.target.name;
        const value=event.target.value;
        setCategory(values=>({...values, [name]:value}));
    };
    const categorySave=(event)=>{
        event.preventDefault();
        updateCategory(category).then((response)=>{
            alert("Category is Updated");
            navigate('/admin-category-list');
        });
    }


    return (
            <div 
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1565021324587-5fd009870e68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fERhcmslMjBibHVlfGVufDB8fDB8fHww')", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                minHeight: "100vh", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                flexDirection: "column",
                padding: "20px" 
            }}
        >
            <div 
                className="card" 
                style={{ 
                    width: "30%", 
                    backgroundColor: "rgb(50 64 80 / 59%)", 
                    backdropFilter: "blur(10px)", 
                    borderRadius: "12px", 
                    padding: "20px", 
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    color: "#ecf0f1", 
                    textAlign: "center" 
                }}
            >
                <h2 style={{ color: "#f1c40f" }}><u>Update Category</u></h2>
                <hr style={{ height: "3px", borderWidth: 0, backgroundColor: "#e67e22" }} />
                <form onSubmit={categorySave}>
                    <div className="form-group text-start">
                        <label>Category Name:</label>
                        <input type="text" className="form-control" name="categoryName" value={category.categoryName} onChange={onChangeHandler} placeholder="Category Name" required />
                    </div>
                    <div className="form-group text-start mt-2">
                        <label>Category Description:</label>
                        <input type="text" className="form-control" name="description" value={category.description} onChange={onChangeHandler} placeholder="Category Description" required />
                    </div>
                    <button className="btn mt-3" type="submit" style={{ backgroundColor: "#007bff", color: "#fff", width: "25%" }}>Update</button>
                    <button className="btn mt-3" onClick={returnBack} style={{ backgroundColor: "#27ae60", color: "#fff", width: "25%" }}>Back</button>
                </form>
            </div>
        </div>

        );
    
    
};


export default CategoryUpdate;
