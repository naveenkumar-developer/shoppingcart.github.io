import React from "react";

export default function SliderAndOffer() {
  return (
    <>
      {/* SLIDERS  */}

      <div className="row mx-3">
        <div id="slide" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#slide"
              data-bs-slide-to="0"
              className="active"
            ></button>
            <button
              type="button"
              data-bs-target="#slide"
              data-bs-slide-to="1"
            ></button>
            <button
              type="button"
              data-bs-target="#slide"
              data-bs-slide-to="2"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/slide01.jpg"
                alt="slide01"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3 style={{color:"whitesnow",fontSize:"2rem",fontWeight:"600"}}>nuts</h3>
                <p style={{color:"white",fontSize:"1.5rem",fontWeight:"400"}}>
                  Peanuts, almonds, pecans, and walnuts top the list of the most
                  consumed nut varieties in the United States, showing up most
                  often in sweeter items
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/slide02.jpg"
                alt="slide02"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3 style={{color:"darkgreen",fontSize:"2rem",fontWeight:"700"}}>Vegetables</h3>
                <p style={{color:"white",fontSize:"1.5rem",fontWeight:"400"}}>
                  Vegetables, like fruits, are low in calories and fats but
                  contain good amounts of vitamins and minerals. All the
                  Green-Yellow-Orange vegetables are rich sources of calcium,
                  magnesium, potassium, iron, beta-carotene, vitamin B-complex,
                  vitamin-C, vitamin-A, and vitamin K
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/slide03.jpg"
                alt="slide03"
                className="d-block"
                style={{ width: "100%" }}
              />
              <div className="carousel-caption">
                <h3 style={{color:"orange",fontSize:"2rem",fontWeight:"600"}}>Oranges</h3>
                <p style={{color:"white",fontSize:"1.5rem",fontWeight:"400"}}>Essential for our bodies to stay healthy, Vitamin C not only boosts our immune systems, but is also an important antioxidant that protects the insides and outsides of our bodys’ cells from damage.</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#slide"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#slide"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </button>
        </div>
      </div>
      {/* OFFERS  */}

      <div className="row store-container my-3">
        <a className="col-3 store-links p-3" href="#">
          BUY MORE SAVE MORE
        </a>
        <a className="col-3 store-links p-3" href="#">
          DEALS OF THE WEEK
        </a>
        <a className="col-3 store-links p-3" href="#">
          COMBO STORE
        </a>
      </div>
    </>
  );
}
