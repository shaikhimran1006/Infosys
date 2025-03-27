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
            <div className="container">
                <div className="login-box">
                    <h3>Update Category</h3>
                    <form onSubmit={categorySave}>
                        <input
                            type="text"
                            name="categoryName"
                            value={category.categoryName}
                            onChange={onChangeHandler}
                            placeholder="Category Name"
                            required
                        />
                        <input
                            type="text"
                            name="description"
                            value={category.description}
                            onChange={onChangeHandler}
                            placeholder="Category Description"
                            required
                        />
                        <input type="submit" value="Update" />
                    </form>
                    <button onClick={returnBack}>Back to List</button>
                </div>
            </div>
        );
    
    
};


export default CategoryUpdate;
