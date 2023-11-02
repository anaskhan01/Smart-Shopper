import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Product.css";
import SubHeader from "../../Components/SubHeader";

const Product = () => {
  const notify = () => toast("Order Placed Successfully");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>setData(json));
  }, []);

  function truncateString(length, inputString) {
    if (inputString.length <= length) {
      return inputString;
    } else {
      return inputString.slice(0, length) + "...";
    }
  }
  const userData = data
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search);
    })
    .map((item) => {
      return (
        <div className="productlist" key={item.id}>
          <img src={item.image} alt="" />
          <br />
          <p>{truncateString(30, item.title)}</p>
          <p>Price: {item.price}&#36;</p>{" "}
          <button className="buttonClass" onClick={notify}>Buy Now</button>
          <ToastContainer />
        </div>
      );
    });

    const handleAdd = (data) => {
      dispatch(add(data));
    }
  return (
    <div>
      <SubHeader />
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="userdata">{userData}</div>
    </div>
  );
};

export default Product;
