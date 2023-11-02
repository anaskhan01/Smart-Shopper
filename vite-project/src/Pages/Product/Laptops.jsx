import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import SubHeader from "../../Components/SubHeader";
import "./Laptops.css"

const Laptops = () => {
  const notify = () => toast("Order Placed Successfully");
  const [first, setfirst] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://mobile-api-ycjb.onrender.com/Laptops")
      .then((response) => setfirst(response.data));
  }, []);

  const LaptopData = first
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.title.toLowerCase().includes(search);
    })
    .map((item) => {
      return (
        <div className="Laptoplist" key={item.id}>
          <img src={item.image} alt="" />
          <h3>{item.title}</h3>
          <p>Price: {item.price};</p>
          <ToastContainer />
          <button className="buttonClass" onClick={notify}>Buy Now</button>
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
      <div className="LaptopData">{LaptopData}</div>
    </div>
  );
};

export default Laptops;
