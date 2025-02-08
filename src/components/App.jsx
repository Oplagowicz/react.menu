import React, { useState, useEffect, useRef } from "react";
import Button from "./Button";
import Dish from "./Dish";
import dishes from "../constants/notes_dishes";

function App() {
  const [menuType, setMenuType] = useState(() => {
    return localStorage.getItem("menuType") || "meat";
  });
  const [activeDish, setActiveDish] = useState(() => {
    return localStorage.getItem("activeDish") || null
});

const activeDishRef = useRef(null);


  useEffect(() => {
    localStorage.setItem("menuType", menuType);
  }, [menuType]);

  useEffect(() => {
    if (activeDish) {
      localStorage.setItem("activeDish", activeDish);
    }
  }, [activeDish]);

  useEffect(() => {
    if (activeDishRef.current) {
      activeDishRef.current.scrollIntoView();
    }
  }, [menuType, activeDish]);

  const filteredDishes = dishes.filter(dish => dish.type === menuType);

  const handleDishClick = (key) => {
    setActiveDish(prevDish => (prevDish === key ? null : key));
  };

  return (
    <div>
      <div className="nav">
        <Button type="Meat" onClick={() => setMenuType("meat")} />
        <Button type="Veggie" onClick={() => setMenuType("veggie")} />
      </div>
      <div className="menu">
      {(filteredDishes.map((dish) => (
            <Dish 
              key={dish.key} 
              title={dish.title} 
              content={dish.content} 
              ingredients={dish.ingredients}
              isActive={dish.key === activeDish} 
              onClick={() => handleDishClick(dish.key)} 
              ref={dish.key === activeDish ? activeDishRef : null}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default App;