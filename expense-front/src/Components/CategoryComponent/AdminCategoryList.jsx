import React,{useState,useEffect} from "react"
 
import { useNavigate,Link} from 'react-router-dom';
import '../../LoginView.css';
import {displayAllCategories,deleteCategoryById } from '../../Services/CategoryService';


const AdminCategoryList=()=>{
    const [categories,setCategories]=useState([]);
    let navigate=useNavigate();


    const setCategoryData=()=>{
        displayAllCategories().then((response)=>{
                setCategories(response.data);
            });
        }

useEffect(() => {
    setCategoryData()
}, []);

const returnBack=()=>{
    navigate('/AdminMenu');
}


const removeCategory=(id)=>{
    deleteCategoryById(id).then( res => {
        let remainCategory=categories.filter((category) => (category.categoryId !== id));
     setCategories(remainCategory);
   });
  navigate('/admin-category-list');
}

    return(
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
                    width: "80%", 
                    backgroundColor: "rgb(50 64 80 / 59%)", 
                    backdropFilter: "blur(10px)", 
                    borderRadius: "12px", 
                    padding: "20px", 
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
                    color: "#ecf0f1", 
                    textAlign: "center" 
                }}
            >
                <h2 style={{ color: "#f1c40f" }}><u>Admin Category List</u></h2>
                <hr style={{ height: "3px", borderWidth: 0, backgroundColor: "#e67e22" }} />
                <table className="table">
                    <thead>
                        <tr>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Category Id</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Category Name</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Description</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Update Category</th>
                            <th style={{ backgroundColor: "rgba(6, 218, 207, 0.94)" }}>Delete Category</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => (
                            <tr key={category.categoryId}>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>{category.categoryId}</td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>{category.categoryName}</td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>{category.description}</td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>
                                    <Link to={`/update-category/${category.categoryId}`}>
                                        <button className="btn btn-info" style={{ width: "40%", marginLeft: "10px" }}>Update</button>
                                    </Link>
                                </td>
                                <td style={{ backgroundColor: "rgba(138, 240, 242, 0.9)" }}>
                                    <button className="btn btn-danger" onClick={() => removeCategory(category.categoryId)} style={{ width: "40%", marginLeft: "10px" }}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br />
                <button className="btn" onClick={returnBack} style={{ backgroundColor: "#27ae60", color: "#fff", width: "25%" }}>Return</button>
            </div>
        </div>
 
    );

}

export default AdminCategoryList;