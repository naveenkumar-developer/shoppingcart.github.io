import React from "react";

export default function Showcattegories() {
  return (
    <>
      <div className="row p-3 my-3">
        <div className="col-sm-4  ">
          <div className="offcanvas offcanvas-start" id="demo">
            <div className="offcanvas-header">
              <h1 className="offcanvas-title">CATEGORIES:</h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
              ></button>
            </div>
            <div className="offcanvas-body">
              <div id="accordion">
                <div className="card">
                  <div className="card-header">
                    <a
                      data-bs-toggle="collapse"
                      href="#collapseOne"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Fruits
                    </a>
                  </div>
                  <div
                    id="collapseOne"
                    className="collapse show"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>Apple</p>
                      <p>Banana</p>
                      <p>Orange</p>
                      <p>Mango</p>
                      <p>Grapes</p>
                      <p>Waterelon</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <a
                      data-bs-toggle="collapse"
                      href="#collapseTwo"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      vegetables
                    </a>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>Carrots</p>
                      <p>Beets</p>
                      <p>Cauliflower</p>
                      <p>Red cabbage</p>
                      <p>Sweat potatoes</p>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <div className="card-header">
                    <a
                      data-bs-toggle="collapse"
                      href="#collapseThree"
                      style={{
                        display: "block",
                        textDecoration: "none",
                        color: "black",
                      }}
                    >
                      Oils
                    </a>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    data-bs-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>Sunflower seed oil</p>
                      <p>Peanut oil</p>
                      <p>Avacado oil</p>
                      <p>coconut oil</p>
                      <p>Olive oil</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn btn-outline-success"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo"
          >
            SHOP BY CATEGORIES
          </button>
        </div>

        <div className="col-sm-8 bg-warning p-2 text-slide">
          My details: click <b>CONTACT</b> on navbar
        </div>
      </div>
    </>
  );
}
