import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, removeProduct, selectedProduct } from "../redux/actions/actions";
import axios from "axios";

const Details = () => {
  const product = useSelector((state) => state.product);
  const { image, price, title, category, description, id } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") {
      fetchProductDetail();
    }
    return () => {
      dispatch(removeProduct());
    };
  }, [productId]);
  // console.log(product);
  return (
    <div className="container">
      {Object.keys(product).length === 0 ? (
        <div>....Loading</div>
      ) : (
        <div className="card m-3">
          <div className="row g-0 m-4">
            <div className="col-md-4">
              <img
                src={image}
                className="img-fluid rounded-start"
                alt={title}
                style={{ height: "30rem", width: "30rem" }}
              />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title" style={{ fontSize: "30px" }}>
                  {title}
                </h5>
                <h6 style={{ color: "grey", fontSize: "20px" }}>{category}</h6>
                <p className="card-text" style={{ fontSize: "22px" }}>
                  {description}
                </p>
                <h5 style={{ fontSize: "30px" }}>${price}</h5>

                <div className="btn btn-primary" onClick={()=>dispatch(addToCart(product))}>
                  Add to Cart
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
