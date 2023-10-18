import React from "react";
import "./CheckOutProduct.css";
import { useDispatch, useSelector } from "react-redux";
function CheckOutProduct({ id, title, price, rating, image }) {
  const basket = useSelector((state) => state.cart_Data);
  const dispatch = useDispatch();
  const handleRemoveFunction = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
    console.log(basket);
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_Price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill("")
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
        <button onClick={handleRemoveFunction}> Remove form basket</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
