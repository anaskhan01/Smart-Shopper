import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SubHeader from "../../../Components/SubHeader";
import axios from "axios";
import "./Mobile.css";

const Mobile = () => {
  const notify = () => toast("Order Placed Successfully");
  const [first, setfirst] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://mobile-api-ycjb.onrender.com/Mobile")
      .then((response) => setfirst(response.data));
  }, []);

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
          <button className="buttonClass" onClick={notify}>Buy Now</button>
          <ToastContainer />
        </div>
      );
    });

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
      <div className="mobileData">{mobileData}</div>
    </div>
  );
};

export default Mobile;
