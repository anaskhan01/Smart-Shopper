import React, { useState } from "react";
import "./Product/cart.css";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import SubHeader from "../Components/SubHeader";
import { remove } from "../Store/CartSlice";
const AddCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const notify = () => toast("order placed succesfully!");
  function truncateString(length, inputString) {
    if (inputString.length <= length) {
      return inputString;
    } else {
      return inputString.slice(0, length) + "...";
    }
  }
  const handleRemove = (productid) => {
    dispatch(remove(productid));
  };
  const userdata = products.length === 0 ? (
    <div>
    <img style={{width: "700px", height: "700px"}} src="https://img.freepik.com/free-vector/product-hunt-concept-illustration_114360-6006.jpg?w=826&t=st=1699169176~exp=1699169776~hmac=67b720a2c9d3a8acff9d5fb71501ac1cfcbfff8a41fee2368d4506a59759570c" alt="" />
    <h1>Your Cart is Empty</h1></div>
  ) : products.map((product) => {
    return (
      <div className="cartlist" key={product.id}>
        <img src={product.image} alt="" />
        <br />
        <p>{truncateString(15, product.title)}</p>
        <p>Price: {product.price}&#36;</p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <button className="buttonClass" onClick={notify}>
            Buy Now
          </button>
          <ToastContainer />
          <button
            className="buttonClass"
            onClick={() => handleRemove(product.id)}>
            Remove
          </button>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div>
        <SubHeader />
      </div>
      <div className="userdata">{userdata}</div>
    </div>
  );
};

export default AddCart;
