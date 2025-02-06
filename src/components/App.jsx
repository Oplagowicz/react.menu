import React from "react";
import Button from "./Button";
import Dish from "./Dish";
import dishes from "./notes_dishes";

function App() {
  return (
    <div>
      <div className="nav">
        <Button type="Meat" />
        <Button type="Vegetarian" />
      </div>
      <div className="menu">
        {dishes.map((dish) => (
          <Dish 
            key={dish.key} 
            title={dish.title} 
            content={dish.content} 
            ingredients={dish.ingredients} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;