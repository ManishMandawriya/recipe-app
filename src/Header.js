import React from "react";
import Navbar from "./Navbar";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import SearchIcon from "@mui/icons-material/Search";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    
      
    
    <div className="jumbotron">
      <h1 className="display-1">
      <FastfoodIcon
              className="fastfoodicon"
              style={{ fontSize: "80px" }}
            />Food Recipe
      </h1>
      <div className="input-group w-50 mx-auto">
       
        { <input
          type="text"
          className="form-control"
          placeholder="Search Your Recipe..."
          value={search}
          onChange={onInputChange}
        /> }
        <div className="input-group-append">
          <button className="btn btn-dark " style={{marginTop:"6%"}} onClick={onSearchClick}>
            Search Recipe
          </button>
        </div>
      </div>
    
      <Navbar/>
    </div>
  );
};

export default Header;




















































// import React from "react";
// import FastfoodIcon from "@mui/icons-material/Fastfood";
// import SearchIcon from "@mui/icons-material/Search";

// const Header = (props) => {
//   const { search, onInputChange } = props;
//   return (
//     <>
//       <div className="jumbotron">
//         <h1 className="display-1">
//           <i>
//             <FastfoodIcon
//               className="fastfoodicon"
//               style={{ fontSize: "80px" }}
//             />
//           </i>
//           Food Recipes
//         </h1>
//         <div className="input-group mb-3 w-50 mx-auto">
       

//           <div className="meal-search-box">
//             <input
//               type="text"
//               className="search-control"
//               placeholder="Enter an ingredient"
//               id="search-input"
//               onChange={onInputChange}

//             />
//             <button type="submit" className="search-btn btn" id="search-btn">
//               <i className="fas fa-search">
//                 <SearchIcon />
//               </i>
//             </button>
//           </div>

//           <div className="input-group-append">
           
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
