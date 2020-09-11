import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import uuid from "uuid";

function ProductForm({ addProduct }) {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    price : ""
  });

  function handleTitleInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setProduct({ ...product, title: e.target.value });
    
  }
  function handlePriceInputChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setProduct({ ...product, price: e.target.value });
    
  }

  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (product.title.trim()) {
      addProduct({ ...product, id: uuid.v4() });
      setProduct({ ...product, title: "", price: "" });
    }

  }

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <TextField
        label="Title"
        type="text"
        name="title"
        value={product.title}
        onChange={handleTitleInputChange}
        required
      />
      <TextField
        label="Price"
        type="number"
        name="price"
        value={product.price}
        onChange={handlePriceInputChange}
        required
      />
      <Button type="submit">Add Product</Button>
    </form>
  );
}

export default ProductForm;
