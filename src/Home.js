import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <section className="page-section clearfix logoutbtn">
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 rounded"
              src="pictures/intro.jpg"
              alt=""
            />
            <div className="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-lower">Welcome!</span>
              </h2>
              <p className="mb-3">
                {" "}
                IS YOUR CARS WOF DUE? DON'T FORGOT ABOUT THE SERVICE OF YOUR
                CAR. THEN NOT TO WORRY! JUST BRING YOUR CAR TO CAR SERVICE
                ONEHUNGA... WE SPECIALIZE IN AUTO ELECTRICAL AND MECHANICAL
                WORKS AS WELL... SO COME OVER AND GET A GREAT DEALS ! PLACE
                WHERE WE CAN PROVIDE SOLUTION FOR YOUR CARS, COME AND HAVE A
                GREAT DEALS IN CAR SERVICE!
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="/JobSheet">
                  Start Here By Adding Your Car Details!
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="intro2">
            <img
              className="intro2-img img-fluid mb-3 mb-lg-0 rounded"
              src="pictures/eagle.jpg"
              alt=""
            />
            <div className="intro2-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-lower">About us!</span>
              </h2>
              <p className="mb-3">
                For over twelve years our Car Repairing Company has been
                providing the best service a customer could ask for. People
                trust the experienced staff with any sort of car problems as the
                staff takes care of the vehicles as if it were their own. That
                is why our Car Repairing Company is the one shop pit stop for
                all your auto electrical and mechanical needs including WOF and
                vehicle servicing at a reasonable price - you'll never drive off
                disappointed.
                <hr />
                <b>
                  {" "}
                  For Contacts: +64 22 854 0023
                  E-Mail:CarServiceCompany@gmail.com{" "}
                </b>
              </p>
              <div className="intro2-button mx-auto">
                <a className="btn btn-primary btn-xl" href="/bookonline">
                  BOOK ONLINE!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
