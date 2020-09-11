import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const LOCAL_STORAGE_KEY = "product-list";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
   
    const storageProducts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageProducts) {
      setProducts(storageProducts);
    }
  }, []);

  useEffect(() => {
    
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  function addProduct(product) {
   
    setProducts([product, ...products]);
  }

  function removeProduct(id) {
    setProducts(products.filter(product => product.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        Product List
      </Typography>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        removeProduct={removeProduct}
      />
    </div>
  );
}

export default App;
