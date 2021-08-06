import React from 'react';
import Product from './Product'
import './List.css';


function List({products}) {
    
    return (
        <div className="productsList">
             {products.map((product)=>{
                return <Product key={product.Id} product={product}></Product>
             })}
        </div>
    );
}

export default List;