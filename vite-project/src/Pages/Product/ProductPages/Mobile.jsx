import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import SubHeader from "../../../Components/SubHeader";
import axios from "axios";
import "./Mobile.css";
import { add } from "../../../Store/CartSlice";
import { useNavigate } from "react-router-dom";
import {CiSearch} from 'react-icons/ci'

const Mobile = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://mobile-api-ycjb.onrender.com/Mobile")
      .then((response) => setfirst(response.data));
  }, []);

  const handleAdd = (item) => {
    dispatch(add(item));
};

  const mobileData = first
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search);
    })
    .map((item) => {
      return (
        <div className="mobilelist" key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>Price: {item.price};</p>
          <button className="buttonClass" onClick={()=>{navigate('/product-detail', {state: item})}}>Buy Now</button>
          <button className="buttonClass" onClick={() => handleAdd(item)}>
          Add to Cart
        </button>
        </div>
      );
    });

  return (
    <div>
      <SubHeader />
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search Shopeer" onChange={(e)=> searchByTitle(e.target.value)}/>
        <div className="search-icon">
        <CiSearch/>
        </div>
      </div>
      <div className="mobileData">{mobileData}</div>
    </div>
  );
};

export default Mobile;
