import React from "react";
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
  const userdata = products.map((product) => {
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
          }}
        >
          <button className="buttonClass" onClick={notify}>
            Buy Now
          </button>
          <ToastContainer />
          <button
            className="buttonClass"
            onClick={() => handleRemove(product.id)}
          >
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
