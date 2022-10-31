import React from "react";
import RecipeItem from "./RecipeItem";
import Header from "./Header";

const Recipes = props => {
  const { recipes } = props;
  return (
    <div className="card-columns">
    {/* <Header></Header> */}
      {recipes.map(recipe => (
        <RecipeItem
          key={Math.random() * 100}
          name={recipe.recipe.label}
          image={recipe.recipe.image}
          ingredientLines={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};

export default Recipes;














































// import React from 'react'
// import './Recipe.css'
// import CloseIcon from '@mui/icons-material/Close';
// const Recipes = () => {
//   return (
//     <>


//       <div className = "meal-result">
//         <h2 className = "title">Your Search Results:</h2>
//         <div id= "meal">
//           <div className = "meal-item">
//             <div className = "meal-img">
//               <img src = "https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg" alt = "food"/>
//             </div>
//             <div className = "meal-name">
//               <h3>Burger</h3>
//               <a href='' className = "recipe-btn" >Get Recipe</a>
//             </div>
//           </div>
//         </div>

// <div className="container">


//       <div className='meal-details'>
//         <button type='button' className='btn recipe-close-btn' id='recipe-close-btn'>
//           <i className='fas fa-times'><CloseIcon/></i>
          
//         </button>
//         <div className='meal-details-content'>
//           <h2 className='recipe-title'>Meals Name Here</h2>
//           <p className='recipe-category'>Category Name</p>
//           <div className='recipe-instruct'>
//             <h3>Instructions:</h3>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, natus expedita. Itaque, numquam dolorum alias, veritatis doloribus hic tenetur amet, asperiores reprehenderit repudiandae explicabo animi.</p>
//           </div>
//           <div className='recipe-meal-img'>
//             <img src="https://w0.peakpx.com/wallpaper/101/95/HD-wallpaper-burgers-fast-food-delicious-food-sandwiches-harmful-food.jpg" alt="recipe-img" />
//           </div>
//           <div className='recipe-link'>
//             <a href="#" target="_blank">Watch Videos</a>
//           </div>
//         </div>
// </div>
//       </div>


      
//       </div>


//     </>
//     )
// }

// export default Recipes