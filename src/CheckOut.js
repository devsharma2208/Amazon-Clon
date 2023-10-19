import React from "react";
import "./CheckOut.css";
import { useSelector } from "react-redux";
import CheckOutProduct from "./CheckOutProduct";
import SubTotal from "./SubTotal";
function CheckOut() {
  const basket = useSelector((state) => state.cart_Data);

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <>
            <h1>Your Shopping Basket is empty..</h1>
            <p>
              You have no items in your basket. To buy one or more items, click
              'Add to basket' next to the item.
            </p>
          </>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((item, index) => {
              console.log(item);
              return (
                <CheckOutProduct
                  key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="chackout_right">
          <SubTotal />
        </div>
      )}
    </div>
  );
}
export default CheckOut;
