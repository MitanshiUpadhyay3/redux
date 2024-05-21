import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions/actions";

const Product = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  
  const renderList = products.map((productI) => {
    const {id, image, price, title, category} = productI;
    return (
      <div className="col-md-3" key={id}>
        <div
          className="card mt-5
          "
          style={{ width: "18rem", height: "28rem" }}
        >
          <img src={image} className="card-img-top mx-3 my-3" alt={title} style={{height:"15rem", width:"15rem"}}/>
          <div className="card-body">
            <h6 className="card-title">{title}</h6>
            <h5>${price}</h5>
            <h6 style={{color: "grey"}}>{category}</h6>
            <p className="card-text">
            </p>
            <div className="buttons">
            <Link to={`/detail/${id}`} >
              <div className="btn">Show More</div>
             
            </Link>
            {/* <Link to={`/cart/:${id}`}> */}
            <div className="btn" onClick={()=>dispatch(addToCart(productI))}>
                  Add to Cart
            </div>
            {/* </Link> */}
            </div>

            
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
    <div className="row">
    {renderList}
    </div>
    </>
  );
};

export default Product;
