import React, { useEffect, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const notify = () => toast("Order Placed Successfully");
  const [data, setData] = useState([]);
  const [restart, setrestart] = useState(false);

  function searchByTitle(searchTerm) {
    if (searchTerm !== "") {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const FilterArray = data.filter((item) => {
        const lowerCaseTitle = item.title.toLowerCase();
        return lowerCaseTitle.includes(lowerCaseSearchTerm);
      });
      setData(FilterArray);
    } else {
      setrestart(!restart);
    }
  }

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setData(response.data));
  }, [restart]);

  function truncateString(length, inputString) {
    if (inputString.length <= length) {
      return inputString;
    } else {
      return inputString.slice(0, length) + "...";
    }
  }

  const userData = data?.map((item) => {
    return (
      <div className="productlist" key={item.id}>
        <img src={item.image} alt="" />
        <br />
        <p>{truncateString(15, item.title)}</p>
        <p>Price: {item.price}&#8377;</p>{" "}
        <button className="buttonClass" onClick={notify}>
          Buy Now
        </button>
        <ToastContainer />
      </div>
    );
  });

  return (
    <div>
      <h1 className="h1">Deals of the Day</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          style={{ textAlign: "center" }}
          onChange={(e) => searchByTitle(e.target.value)}
          placeholder="Search..."
        />
      </div>
      <div className="userdata">{userData}</div>
    </div>
  );
};

export default Home;