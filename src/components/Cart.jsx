// import axios from "axios";
// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeProduct } from "../redux/actions/actions";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart.pros);
//   const dispatch = useDispatch();

//   const handleRemove = (productId) =>{
//     dispatch(removeProduct(productId))
//     console.log("removed")
//     console.log(productId)
//     console.log(cart)
//   }
//   const renderCart = cart.map((item, idx) => {
//     const { id, title, image, price, category } = item;
//     return(
//     <div className="row" key={idx}>
//       <div className="col-3">
//         <img
//           src={image}
//           alt={title}
//           style={{ height: "3rem", width: "3rem" }}
//         />
//       </div>
//       <div className="col-3">
//         <h6>{title}</h6>
//       </div>
//       <div className="col-2">
//         <p>{category}</p>
//       </div>
//       <div className="col-2">
//         <h5>{price}</h5>
//       </div>
//       <div className="col-2 btn btn-primary" onClick={()=>{handleRemove(id)}}>Remove</div>
//     </div>

//     )
//   });
//   console.log("cliked");

//   return (<div>{renderCart}</div>);
// };

// export default Cart;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct } from "../redux/actions/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart.pros);
  const dispatch = useDispatch();

  const handleRemove = (productId) => {
    dispatch(removeProduct(productId));
  };

  return (
    <div>
      
      {cart.length === 0 ? (
        <p className="empty">Your cart is empty!!</p>
      ) : (
        <div>
          {cart.map((product) => (
            <div key={product.id} className="individualP row ">
              <div className="cartImg col-1">
              <img src={product.image} alt={product.title} style={{ height: "90px", width: "90px" }} className="my-2" />
              </div>
              <div className="cartTitle col-5">
              <p>{product.title}</p>
              </div>
              <div className="cartPrice col-4">
              <p>${product.price}</p>
              </div>
              <div className="remove col-2">
              <button onClick={() => handleRemove(product.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
