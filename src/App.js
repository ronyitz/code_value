import './App.css';
import { data } from './data';
import React, { useEffect, useState } from 'react';
import List from './List'
import ProductEdit from './productEdit'
import AddProduct from './AddProduct'

export const ProductContext = React.createContext();

function App() {

  const [products, setProducts] = useState(data);
  const [currProduct,setcurrProduct] = useState(data[0]);
  const [isEdit,setaddOrEdit] = useState(false);
  const [currProductId,setcurrProductId]=useState(1);


  const removeProduct = (e,Id)=> {
    setProducts((Products) => {
      return Products.filter((product) => product.Id !== Id);
    });
    e.stopPropagation();
  }

  const chooseProduct = (Id)=> {  
    setcurrProduct(products.find((product) => product.Id === Id))
    setaddOrEdit(true);
    setcurrProductId(Id);
  }

  const saveProduct = (Id,Product)=> {  
    let index = products.findIndex((product)=>product.Id===Id);
    let newProducts = [...products];
    newProducts[index]=Product;
    setProducts(newProducts);
    setcurrProduct(Product);
    newProducts=[];
  }

  const addProduct = (Product)=> {  
    setProducts((products)=>{
      return [...products,Product];
    })
    // let index = products.findIndex((product)=>product.Id==Id);
    // let newProducts = [...products];
    // newProducts[index]=Product;
    // setProducts(newProducts);
    // setcurrProduct(Product);
    // newProducts=[];
  }

  useEffect(() => {
    // console.log(currProduct);
  }, []);


  return (
    <ProductContext.Provider value={ {removeProduct, chooseProduct, saveProduct, addProduct , currProductId}  }>
    <div className="App">
      <h1>Welcome To Our Shop!</h1>
      <button onClick={()=>setaddOrEdit(false)}>Add</button>
      <div className="main">
        <List products={products}></List>
       {isEdit && currProduct ? <ProductEdit {...currProduct}></ProductEdit> : <AddProduct></AddProduct>}
      </div>
    </div>
    </ProductContext.Provider>
  );
}

export default App;
