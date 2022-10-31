import React from "react";

const Indian = (props) => {
  return (
    <>
    <h1 className="text-center mt-3">All Items</h1>
    <section className="py-4 container">
        <div className="row justify-content-center"></div>
    </section>
      <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4"></div>
      <div className="card p-0 ovrtflow-hidden h-100 shadow">
        <img src={props.img} className="card-img-top img-fluid" alt="" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <button href="#" className="btn btn-success">
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Indian;
