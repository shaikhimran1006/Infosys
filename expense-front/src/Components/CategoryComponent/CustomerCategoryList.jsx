import React,{useState,useEffect} from "react"
 
import { useNavigate,Link} from 'react-router-dom';
import '../../LoginView.css';
import {displayAllCategories} from '../../Services/CategoryService';
const CustomerCategoryList=()=>{
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
    navigate('/CustomerMenu');
}





    return(
        <div className="text-center">
        <div>
            <h2 className="text-center">Customer Category List</h2>
             <hr style={{height: "3px", borderWidth:0, color:"yellow", backgroundColor:"red"}}/>
              <div className = "row">
              <table className = "table table-striped table-bordered">
               <thead>
               <tr>
                 <th> Category Id</th>
                 <th> Category Name</th>
                 <th> Description </th>
                 <th> Expense  </th>
                 
              </tr>
              </thead>
              <tbody>
                 {
                    categories.map((category, index) => (
                        <tr key = {category.categoryId}>
                            <td>{category.categoryId}</td>
                            <td>{category.categoryName}</td>
                            <td>{category.description}</td>
                            <td><Link to={`/expense-category/${category.categoryId}`}><button style={{marginLeft: "10px"}}  className="btn btn-info"> Expense Entry </button></Link></td>
                      


                             </tr>

                     
                     ) )
               }                        
         </tbody>
        </table>
        <br/>
         <button style={{marginLeft: "10px"}} onClick={()=>returnBack()} className="btn btn-success">Return</button>    
       </div>
     </div>
    </div> 
    );

}

export default CustomerCategoryList;