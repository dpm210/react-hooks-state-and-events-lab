import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function categoryHandler(e){
    console.log(e)
    setSelectedCategory(e.target.value)
  }

  const displayFiltered = items.filter((item) => {
    if (selectedCategory === "All") return true;

  return item.category === selectedCategory;
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={categoryHandler} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayFiltered.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
