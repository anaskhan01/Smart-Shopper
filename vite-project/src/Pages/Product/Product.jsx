import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Product.css";
import SubHeader from "../../Components/SubHeader";
import { useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
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
          <p>{truncateString(15, item.title)}</p>
          <p>Price: {item.price}&#36;</p>{" "}
          <button
            className="buttonClass" onClick={()=>{navigate('/product-detail', {state: item})}}>
            Buy Now
          </button>
          <button className="buttonClass" onClick={() => handleAdd(item)}>
            Add to Cart
          </button>
        </div>
      );
    });

  const handleAdd = (data) => {
    dispatch(add(data));
  };
  return (
    <div>
      <SubHeader />
      <div className="search-container">
        <input type="text" className="search-bar" placeholder="Search for Products, Brands and More" onChange={(e)=> searchByTitle(e.target.value)}/>
        </div>
      <div className="userdata">{userData}</div>
    </div>
  );
};

export default Product;
