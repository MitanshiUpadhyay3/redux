import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "./Product";
import axios from "axios";
import { setProduct } from "../redux/actions/actions";
import { useParams } from "react-router-dom";

const List = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  const productId = useParams()


  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
      dispatch(setProduct(response.data))
      
  };

  useEffect(()=>{
    fetchProducts()
  }, [])

  return (
    <div>
      <Product />
    </div>
  );
};

export default List;
