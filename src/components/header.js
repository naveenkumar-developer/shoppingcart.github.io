import React from 'react';
import '../components/header.css';

export default function Header() {
  return (
   <>
          <div
          className="row head-container"
          style={{backgroundColor: "lightgreen" }}
        >
          <div className="col-sm-4 col-lg-2 border-1  logo">
            <img
              src="./images/favicon.png"
              alt="Small-basket"
              height="120px"
              width="80px"
            />
            <span id="text">
              <span style={{color:"orangered"}}>Small</span>
              <span style={{color:"violet"}}>basket</span>
            </span>
          </div>
          <div className="col-sm-8 col-lg-6 border-1   input-field">
            <div className="input-group">
              <input type="text" className="form-control" />
              <span className="input-group-text">
                <button type="button" className="btn btn-outline-primary">
                  search
                </button>
              </span>
            </div>
          </div>
          <div className=" col-lg-4 border-1  nav-container ">
            <nav className=" navbar navbar-expand-sm  ">
              <ul className="navbar-nav  ">
                <li className="nav-item pe-2">
                  <a className="nav-link text-dark box" href="#">
                    HOME
                  </a>
                </li>
                <li className="nav-item pe-2">
                  <a
                    href="#myModal"
                    className="nav-link text-dark box"
                    data-bs-toggle="modal"
                  >
                    CONTACT
                  </a>

                  <div className="modal" id="myModal">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Contact me:</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        <div className="modal-body">
                          NAME:naveenkumar.c <br></br>
                          PHONE NO: 9025102806 <br></br>
                          MAIL-ID:{" "}
                          <a href="nkdavid861@gmail.com" target="_blank">
                            Gmail.com
                          </a>{" "}
                          <br></br>
                          GITHUB-LINK:{" "}
                          <a
                            href="https://github.com/naveenkumar-developer"
                            target="_blank"
                          >
                            github.com
                          </a>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item pe-2">
                  <a
                    href="#myModal1"
                    className="nav-link text-dark box"
                    data-bs-toggle="modal"
                  >
                    ABOUT US
                  </a>

                  <div className="modal" id="myModal1">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">About us:</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>

                        <div className="modal-body">
                          <p>E-commerce website:</p>
                          <p>
                            in this project only i create the UI design.{" "}
                            <br></br>
                            in Feature, I will add javascript functions to this
                            project. <br></br>I hope you like the website. if
                            you like to see my other projects on Github{" "}
                            <br></br>
                            <br></br>I give my Github link in the CONTACT link.
                          </p>
                        </div>

                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-danger"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        </>
  )
}
