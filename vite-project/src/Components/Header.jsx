import { useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const nav = useNavigate();
  return (
    <div>
      <div className="container">
        <h1 onClick={() => nav("/")}>Smart Shopper</h1>
          <button className="btn" onClick={() => nav("/")}>
            Home
          </button>
          <button className="btn" onClick={() => nav("/product")}>
            Products
          </button>
          <button className="btnwishlist" onClick={() => nav("/addcart")}>
            <BiCartAlt  style={{ height: "30px", width: "30px"}} />
           <span style={{color: "black", fontWeight: "bold"}}> {cart.length} </span>
          </button>
      </div>
    </div>
  );
};

export default Header;
