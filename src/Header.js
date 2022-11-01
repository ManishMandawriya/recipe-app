import React from "react";
import Navbar from "./Navbar";
import FastfoodIcon from "@mui/icons-material/Fastfood";

const Header = props => {
  const { search, onInputChange, onSearchClick } = props;
  return (
    
      
    
    <div className="jumbotron">
      <h1 className="display-1">
      <h1 className="mykitchen">My Kitchen</h1>
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


