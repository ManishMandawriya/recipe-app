import React from "react";
import Header from "./Header";

const RecipeItem = props => {
  const { name, image, ingredientLines } = props;
  return (
    <>

    {/* <Header/> */}
    
    <div className="card py-2 text-center">
        <img src={image} alt="Food Image." className="img-fluid w-50 mx-auto rounded-circle" />
        <div className="card-body">
          <h5>{name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          {ingredientLines.map(ingredient => (
            <li className="list-group-item">{ingredient}</li>
          ))}
        </ul>
      </div>
      </>
  );
};

export default RecipeItem;
