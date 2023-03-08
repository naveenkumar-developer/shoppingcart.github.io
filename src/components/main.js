import React from "react";
import "../components/main.css";

export default function Main() {
  return (
    <>
      {/* Top Offers */}
      <div className="row">
        <div
          className="col display-6 my-3"
          style={{ textAlign: "center", borderBottom: "2px solid grey" }}
        >
          Top Offers
        </div>
      </div>
      <div className="row my-3 offer-container">
        <div className="col-sm-6 col-lg-3">
          <div className="outerbox">
            DEALS OF
            <div className="innerbox">THE WEEK</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="outerbox">
            BIG PACK
            <div className="innerbox">BIGGER DISCOUNTS</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="outerbox">
            COMBOS
            <div className="innerbox">YOU CAN'T MISS</div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="outerbox">
            THE
            <div className="innerbox">₹30 CORNER</div>
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div
          className="col display-6 my-3"
          style={{ textAlign: "center", borderBottom: "2px solid grey" }}
        >
          Featured Recipes
        </div>
      </div>

      {/* image_overlay  */}
      <div className="row">
        <div className="col ">
          <div className="fruit_juice_container">
            <img
              src="./images/fruit-juice.jpg"
              alt="fruit-juice"
              className="juice_img"
            />
            <div className="overlay_text">
              <p style={{ color: "white" }}>
                <img
                  src="./images/favicon.png"
                  alt="icon"
                  width="52px"
                  height="52px"
                />
                Wellness
              </p>
              <p style={{ color: "lightgreen" }}>Did you know?</p>
              <p style={{ color: "white" }}>
                Micronutrient deficiencies suppress the immune system leading to
                chronic diseases.
              </p>
              <button type="button" className="btn btn-danger btn-lg">
                {" "}
                <a href="#i" style={{ color: "white", textDecoration: "none" }}>
                  IMPROVE YOUR DIET
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* details  */}

      <div
        className="row m-3"
        style={{ border: "2px solid black", backgroundColor: "aliceblue" }}
      >
        <div className="col">
          <div className="h3">Smallbasket – online grocery store</div>
          <p>
            Did you ever imagine that the freshest of{" "}
            <span style={{ color: "rgb(28, 240, 28)" }}>
              fruits and vegetables
            </span>{" "}
            , top quality pulses and food grains,{" "}
            <span style={{ color: "rgb(28, 240, 28)" }}>dairy products</span>{" "}
            and hundreds of branded items could be handpicked and delivered to
            your home, all at the click of a button? India’s first comprehensive
            online megastore, smallbasket.com, brings a whopping 20000+ products
            with more than 1000 brands, to over 4 million happy customers. From
            household cleaning products to beauty and makeup, bigbasket has
            everything you need for your daily needs. bigbasket.com is
            convenience personified We’ve taken away all the stress associated
            with shopping for daily essentials, and you can now order all your
            household products and even buy groceries online without travelling
            long distances or standing in serpentine queues. Add to this the
            convenience of finding all your requirements at one single source,
            along with great savings, and you will realize that bigbasket-
            India’s largest online supermarket, has revolutionized the way India
            shops for groceries. Online grocery shopping has never been easier.
            Need things fresh? Whether it’s fruits and vegetables or dairy and
            meat, we have this covered as well! Get fresh eggs, meat, fish and
            more online at your convenience. Hassle-free Home Delivery options
            We deliver to 25 cities across India and maintain excellent delivery
            times, ensuring that all your products from groceries to snacks
            branded foods reach you in time.
          </p>
          <p>
            We deliver to 25 cities across India and maintain excellent delivery
            times, ensuring that all your products from groceries to snacks{" "}
            <span style={{ color: "rgb(28, 240, 28)" }}>branded foods</span>{" "}
            reach you in time.
          </p>
          <ul>
            <li>
              Slotted Delivery: Pick the most convenient delivery slot to have
              your grocery delivered. From early morning delivery for early
              birds, to late-night delivery for people who work the late shift,
              bigbasket caters to every schedule.
            </li>
            <li>
              Express Delivery: This super useful service can be availed by
              customers in cities like Bangalore, Mumbai, Pune, Chennai,
              Kolkata, Hyderabad and Delhi-NCR in which we deliver your orders
              to your doorstep in 90 Minutes.
            </li>
            <li>
              SB Specialty stores: Missed out on buying that essential item from
              your favorite neighborhood store for tonight’s party? We’ll
              deliver it for you! From bakery, sweets and meat to flowers and
              chocolates, we deliver your order in 90 minutes, through a special
              arrangement with a nearby specialty store, verified by us.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
