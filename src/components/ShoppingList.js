import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [userSelectedCategory, setUserSelectedCategory] = useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleCategoryInput(event) {
    const search = event.target.value
    setUserSelectedCategory(search);
  }

  const itemsToDisplay = items.filter((item) => {
    if (userSelectedCategory.length > 0) {console.log(userSelectedCategory);
      return item.category === userSelectedCategory}

    else if (selectedCategory === "All") {return true}

    else return item.category === selectedCategory
  });

  return (
    <div className="ShoppingList">
      <ItemForm />
      <Filter onCategoryChange={handleCategoryChange} userSelectedCategory={userSelectedCategory} onSearchChange={handleCategoryInput}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
