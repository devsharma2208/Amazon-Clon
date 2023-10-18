import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
function Product({ id, title, price, rating, image }) {
  const dispatch = useDispatch();

  const handleCartData = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  // console.log(cartData);

  return (
    <div className="product">
      <div className=" product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill("")
            .map((_) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={handleCartData}>Add to basket</button>
    </div>
  );
}

export default Product;
