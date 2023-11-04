import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main">
      <div className="footer-content">
        <h3>Smart Shopper</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
          consequatur a quo non, vero molestias quod eos alias quibusdam et?
        </p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/addcart">Cart</Link>
          </li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>
          copyright &copy;2023 Smart Shopper. designed by <span>Anas</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
