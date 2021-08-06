import React, { useEffect, useState, useContext } from 'react';
import './productEdit.css';
import {ProductContext} from './App'

function ProductEdit(props) {


    const [prevId,setPrevId]=useState("1");
    const [Id,setId]=useState("1");
    const [Name,setName]=useState("");
    const [Description,setDescription]=useState("");
    const [Price,setPrice]=useState("");
    const { saveProduct } = useContext(ProductContext);

    // props
    useEffect(() => {
        setPrevId(props.Id);
        setId(props.Id);
        setName(props.Name);
        setDescription(props.Description);
        setPrice(props.Price);

      },[props]);
    

    // const {Id,Name,Description} = props.product;


    return (
          <div className="productDetails">
            <h1>Product Details:</h1>
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
            <button onClick={()=>saveProduct(prevId, {   Id: Id, Name: Name, Description: Description, Price: Price} )} >
            save
            </button>
            </div>
    );
}

export default ProductEdit;