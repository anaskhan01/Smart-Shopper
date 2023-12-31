import React, { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "./Home.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../Store/CartSlice";
import { useNavigate } from "react-router-dom";
import {CiSearch} from 'react-icons/ci'

const Home = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [restart, setrestart] = useState(false);
  const navigate = useNavigate();

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

  const handleAdd = (item) => {
    dispatch(add(item));
  };

  const userData = data?.map((item) => {
    return (
      <div className="productlist" key={item.id}>
        <img src={item.image} alt="" />
        <br />
        <p>{truncateString(15, item.title)}</p>
        <p>Price: {item.price}&#8377;</p>{" "}
        <button
          className="buttonClass"
          onClick={() => {
            navigate("/product-detail", { state: item });
          }}
        >
          Buy Now
        </button>
        <button className="buttonClass" onClick={() => handleAdd(item)}>
          Add to Cart
        </button>
      </div>
    );
  });

  return (
    <div>
        <div className="search-container">
        <input type="text" className="search-input" placeholder="Search Shopeer" onChange={(e)=> searchByTitle(e.target.value)}/>
        <div className="search-icon">
        <CiSearch/>
        </div>
      </div>
      <div className="userdata">{userData}</div>
    </div>
  );
};

export default Home;
