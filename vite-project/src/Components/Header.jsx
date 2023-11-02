import { useNavigate } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.css";

const Header = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="container">
        <h1 onClick={() => nav("/")}>Shopy</h1>
        <nav>
          <button className="btn" onClick={() => nav("/")}>
            Home
          </button>
          <button className="btn" onClick={() => nav("/product")}>
            Products
          </button>
          <button className="btnwishlist" onClick={() => nav("/addcart")}>
            <AiOutlineHeart />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
