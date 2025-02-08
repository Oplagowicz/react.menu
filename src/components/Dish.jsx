import React, { forwardRef } from "react";
import getIngredientIcons from "../utilities/Ingredient_Icons";
import getDishImage from "../utilities/Dish_Image";


const Dish = forwardRef(({ title, content, ingredients, isActive, onClick }, ref) => {
  const dishImage = getDishImage(title);
  const ingredientIcons = getIngredientIcons(ingredients);

  return (
    <div 
      ref={ref} 
      className={`menu_list ${isActive ? "active" : ""}`} 
      onClick={onClick} 
      tabIndex={0}
    >
      <img className={`dish_img ${isActive ? "transparent" : ""}`} src={dishImage} alt={title} />

      {isActive && (
        <div className="dish_details">
          <h2>{title}</h2>
          <p>{content}</p>
          <div className="ingredients">
            {ingredientIcons.map(({ name, icon }, index) => (
              <div key={index} className="ingredients_list">
                <img src={icon} alt={name} className="ingredient_icon" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
});

export default Dish;


