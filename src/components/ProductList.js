import { List } from "@material-ui/core";
import React from "react";
import Product from "./Product";

function ProductList({ products, removeProduct}) {
  return (
    <List>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          removeProduct={removeProduct}
        />
      ))}
    </List>
  );
}

export default ProductList;
