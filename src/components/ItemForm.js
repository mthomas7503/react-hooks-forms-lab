import React from "react";


function ItemForm({ onItemFormSubmit, listItem, setListItem, handleSelect, selectedOption}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={listItem} onChange={setListItem}/>
      </label>

      <label>
        Category:
        <select name="category" value={selectedOption} onChange={handleSelect}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
