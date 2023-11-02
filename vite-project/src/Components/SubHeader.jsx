import React from 'react'
import { useNavigate } from "react-router-dom";
import "./SubHeader.css"
const SubHeader = () => {
  const navigate = useNavigate();
  return (
    <div>
    <section>
    <button className="btns" onClick={()=> navigate("/mobile")}>Mobile</button>
    <button className="btns" onClick={()=> navigate("/laptops")}>Laptops</button>
    <button className="btns" onClick={()=> navigate("/fashion")}>Fashion</button>
    <button className="btns" onClick={()=> navigate("/tv")}>Electronics</button>
    </section>
    </div>
  )
}

export default SubHeader
