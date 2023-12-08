import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function Product({ id, title, price, rating, image }) {
  const dispatch = useDispatch();
  const cart_data = useSelector((state) => state.cart_Data);

  function handleCartData() {
    return Promise.resolve(
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        },
      })
    ).then(async () => {
      try {
        const collectionName = `$users/${localStorage.getItem("uId")}/cart`;

        const docRef = await addDoc(collection(db, collectionName), {
          cart: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    });
  }

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
