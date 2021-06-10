import React, { useState } from "react";

function Item({ name, category }) {
  const [addItem, setAddItem] = useState();

  function addToCartHandler(e){
    console.log(e)
    setAddItem((addItem) => !addItem)
  }

  return (
    <li className={(addItem ? "in-cart" : "")}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCartHandler} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
