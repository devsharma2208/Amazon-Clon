import React from "react";
import "./Home.css";
import Product from "./Product";
import { Fade } from "react-slideshow-image";
function Home() {
  const fadeImages = [
    {
      url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
  ];
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Makeup-PCnf._CB578346476_.jpg"
        alt=""
      />
      {/* <Slideshow className="home_image" /> */}
      {/* <Fade className="home_image1">
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className="home_image" src={fadeImage.url} alt="" />
          </div>
        ))}
      </Fade> */}
      <div className="home_row">
        <Product
          id="12321331"
          title="Bluetooth Calling Smartwatch starts at..."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRktYTgrNoE9vlgThByx8uSjWpQMEX6f4FriQ&usqp=CAU"
        />
        <Product
          id="12321341"
          title="Cricket Fever Offers..."
          price={11.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjjYXm0bKrsV1VZPuyaq-j009UD1aBDCUz5A&usqp=CAU"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321351"
          title="Appliances for your home | Up to 55% off"
          price={11.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWkErZODgER0wvUr47SKOZrVgBIQx7R90gwg&usqp=CAU"
        />
        <Product
          id="12321365"
          title="Revamp your home in style"
          price={11.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYrPtViDnMO9k20A4GFrFDWiICC1CUt3x3g&usqp=CAU"
        />
        <Product
          id="12321325"
          title="Up to 60% off | Baby products & toys"
          price={11.96}
          rating={5}
          image="data:image/jpeg;base64,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"
        />
      </div>
      <div className="home_row">
        <Product
          id="12321332"
          title="Up to 60% off | Styles for men"
          price={11.96}
          rating={5}
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQRiFcLrna24iQTKCu4ek6KTea2HtGiGXgmg&usqp=CAU"
        />
      </div>
    </div>
  );
}

export default Home;
