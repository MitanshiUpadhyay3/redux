import React from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector((state) => state.cart.pros);
  return (
    <div className="navbar" >
      <div
        className="container-fluid  text-dark p-1 "
      >
       
          <h2 className="mx-5 " style={{display:"inline"}}>MyWardrobe</h2>
        <ul>
          <li>NEW ARRIVALS</li>
          <li>DRESSES</li>
          <li>CLOTHING</li>
          <li>SALE</li>
          <li>TRENDING</li>
        </ul>    

        
        <div className="mt-2 mx-3">
          <Link to="/cart/:productId">
            <i
              class="fa-solid fa-shopping-cart"
              style={{ color: "black", fontSize: "35px", position: "relative" }}
            >
              <sup
                style={{
                  padding: "2px",
                  borderRadius: "50%",
                  fontSize: "12px",
                  position: "absolute",
                  top: "7px",
                  left: "17px",
                  color: "white",
                }}
              >
                {cart.length}
              </sup>
            </i>
          </Link>
        </div>

        
      </div>
      <div className="second-row">
        
      </div>
    </div>
  );
};

export default Header;
