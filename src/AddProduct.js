import React, { useEffect, useState, useContext } from 'react';
import './AddProduct.css';
import {ProductContext} from './App'

function AddProduct(props) {

    const [Id,setId]=useState("1");
    const [Name,setName]=useState("");
    const [Description,setDescription]=useState("");
    const [Price,setPrice]=useState("");
    const { addProduct } = useContext(ProductContext);

    useEffect(() => {
        clear();
    },[]);

    
    const addClick = ()=>{
        if(!Id || !Name || !Description || !Price){
            alert('Some data is missing')
        }else{
            addProduct({Id: Id, Name: Name, Description: Description, Price: Price});
            clear();
        }
    }

    const clear = ()=>{
        setId("");
        setName("");
        setDescription("");
        setPrice("");
    }

    return (
        <div className="productAdd">
        <h1> Add Product:</h1>
        <div>
           <label htmlFor='Id'>Id : </label>
           <input
              type='text'
              id='Id'
              name='Id'
              value={Id}
              onChange={(e)=>setId(e.target.value)}
           />
        </div>
        <div>
           <label htmlFor='Name'>Name : </label>
           <input
              type='text'
              id='Name'
              name='Name'
              value={Name}
              onChange={(e)=>setName(e.target.value)}
           />
        </div>
        <div>
           <label htmlFor='Description'>Description : </label>
           <input
              type='text'
              id='Description'
              name='Description'
              value={Description}
              onChange={(e)=>setDescription(e.target.value)}
           />
        </div>
        <div>
           <label htmlFor='Price'>Price : </label>
           <input
              type='text'
              id='Price'
              name='Price'
              value={Price}
              onChange={(e)=>setPrice(e.target.value)}
           />
        </div>
        <button onClick={addClick}>
        Add
        </button>
     </div>
    );
}

export default AddProduct;