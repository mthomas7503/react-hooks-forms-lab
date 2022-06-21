import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [itemCategory, setItemCategory] = useState("")
  const [itemName, setItemName] = useState("")
  const [selectedOption, setSelectedOption] = useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleUserInput(event) {
    setItemName(event.target.value)
  }

  function handleCategoryInput(event) {
    const search = event.target.value
    setItemCategory(search);
  }

  function handleSelect(event) {
    console.log(event.target.value)
    setSelectedOption(event.target.value)
  }

 function handleSubmit(event) {
  event.preventDefault()
  const newItem = {
    id: uuid(),
    name: itemName,
    category: selectedOption
  }
  setItems([...items, newItem])
  setItemName("")
 }

  const itemsToDisplay = items.filter((item) => {
    if (itemCategory.length > 0) {
      return item.category === itemCategory}

    else if (selectedCategory === "All") {return true}

    else return item.category === selectedCategory
  });

  return (
    <div className="ShoppingList">
      <ItemForm selectedOption={selectedOption} handleSelect={handleSelect} listItem={itemName} onItemFormSubmit={handleSubmit} setListItem={handleUserInput}/>
      <Filter onCategoryChange={handleCategoryChange} itemCategory={itemCategory} onSearchChange={handleCategoryInput}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
