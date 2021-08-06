import React, { useContext } from 'react';
import './Product.css';
import {ProductContext} from './App'

function Product(props) {

    const {Id,Name,Description} = props.product;

    const { removeProduct, chooseProduct, currProductId } = useContext(ProductContext);
    

    return (
        <div className={Id===currProductId ? "productItemActive productItem" : "productItem"}  onClick={() => chooseProduct(Id)}>
            <img src="https://keyreels.com/images/source/Yellow_Smiley.JPG" alt="error"></img>
            <br></br>
            <p>{Name} </p>
            <p>{Description}</p>
            <button onClick={(e) => removeProduct(e, Id)} >Remove Product</button>         
        </div>
    );
}

export default Product;