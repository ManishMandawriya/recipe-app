import React from "react";
import IndianFoodCart from "./IndianFoodCart";
import cart from "./cart";
import "./food.css";

const Indian = (props) => {

  return (
    <>
      <h1 className="text-center mt-3">All Items</h1>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {cart.productData.map((item, index) => {
            return (
              <>
              <div className="img1234">
                <IndianFoodCart
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  pice={item.price}
                  item={item}
                  key={index}
                />
              </div>
              <div>
              {/* <AddToCart/> */}
</div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Indian;
