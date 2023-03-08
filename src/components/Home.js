import React from "react";

// import Header from './components/header';
// import Main from './components/main';
import BasketItems from "./basketItems";
// import Footer from './components/footer';
import data from "../data";

function Home() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-8 display-6 smart-basket my-3 ">
          {" "}
          My Smart Basket
        </div>
        <div className="col-4 btn-container">
          <button type="button" className=" btn btn-success smart-basket-btn">
            Show More
          </button>
        </div>
      </div>
      <div className="py-4 container">
        <div className="row justify-content-center">
          {data.productData.map((item, index) => {
            return (
              <BasketItems
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Home;
