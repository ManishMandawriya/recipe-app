import React, { useState, useEffect } from "react";

import Header from "./Header";
import Recipes from "./Recipes";
import Axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Order from "./Online-order/Order";
import Payment from "./Online-order/Payment";
import Bill from "./Online-order/Bill";
import Cake from "./Online-order/Food-items/Cake";
import FastFood from "./Online-order/Food-items/FastFood";
import Indian from "./Online-order/Food-items/Indian";

const App = () => {
  const [search, setSerach] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "51488f37";
  const APP_KEY = "6d13ccfe16ee57c38b9e64cd9de0502c	";
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };

  const onInputChange = (e) => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  return (
    <div className="App">
      <div className="container">
        <Recipes recipes={recipes} />
      </div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Header
                search={search}
                onInputChange={onInputChange}
                onSearchClick={onSearchClick}
              />
            }
          ></Route>
          <Route path="/order" element={<Order />}></Route>
          <Route path="/order/bill" element={<Bill />}></Route>
          <Route path="/order/bill/payment" element={<Payment />}></Route>
          <Route path="/order/cake" element={<Cake/>}></Route>
          <Route path="/order/fastfood" element={<FastFood/>}></Route>
          <Route path="/order/indian-food"  element={<Indian/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
