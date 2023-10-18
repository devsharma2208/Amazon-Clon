import React from "react";
import "./Subtotal.css";
import { useSelector } from "react-redux";
import { GetBasketTotal } from "./GetBasketTotal";

function SubTotal() {
  const basket = useSelector((state) => state.cart_Data);
  console.log(basket.length);
  return (
    <div className="subtotal">
      <div className="getTotal">
        <p>SubTotal ({basket.length}) :- </p>

        <GetBasketTotal basket={basket} />
      </div>
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
