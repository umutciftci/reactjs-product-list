import { IconButton, ListItem} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React from "react";

function Product({ product, removeProduct }) {
  

  function handleRemoveClick() {
    removeProduct(product.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <ListItemAvatar>
          <Avatar>
            <ShoppingCartIcon />
          </Avatar>
        </ListItemAvatar>
      <ListItemText primary={product.title} secondary={product.price + "₺"} />
      <IconButton onClick={handleRemoveClick}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default Product;
