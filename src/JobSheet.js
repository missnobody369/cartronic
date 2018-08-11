import React, { Component } from "react";
import axios from "axios";

class JobSheet extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    axios
      .get("http://localhost:3001/addclient")
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <form method="POST" action="http://localhost:3001/addclient">
        <div className="jobsheet container text-white">
          <h1 className="text-center">Car Details</h1>
          <div className="text-right">
            <label>Date:</label>
            <input type="date" name="datetoday" required />
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Name:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="fullname"
                  placeholder="Enter Name"
                  className="form-control"
                  title="full name please!"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Address:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="homeaddress"
                  placeholder="Enter Address"
                  className="form-control"
                  title="current address"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Contact:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="number"
                  name="contactnumber"
                  placeholder="Enter Phone Number"
                  className="form-control"
                  title="number that we can contact you with"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Work:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="work"
                  placeholder="Enter Work"
                  className="form-control"
                  title="optional"
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Email:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="email"
                  name="emailaddress"
                  placeholder="Enter Email"
                  className="form-control"
                  title="please provide current email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Username:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Username"
                  className="form-control"
                  title="please type your username"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Password:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  className="form-control"
                  title="please type your password"
                  required
                />
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <div className="col-md-4">
                <label>Repeat Password:</label>
              </div>
              <div className="col-md-8">
                <input
                  type="password"
                  name="repeatpassword"
                  placeholder="Repeat Password"
                  className="form-control"
                  title="please repeat your password"
                  required
                />
              </div>
            </div>
          </div>

          <div>
            <p>
              {" "}
              HOW DID YOU FIND US:
              <label for="findus" />
              <select id="findus" name="findus">
                <option name="findus" value="friend">
                  Friend/Family
                </option>
                <option name="findus" value="Yellow Pages">
                  Yellow Pages
                </option>
                <option name="findus" value="Drive Past">
                  Drive Past(road signs)
                </option>
                <option name="findus" value="Existing Customer">
                  Existing Customer
                </option>
                <option name="findus" value="Google">
                  Google
                </option>
                <option name="findus" value="News Paper">
                  News Paper
                </option>
                <option name="findus" value="Previous Customer">
                  Drive Past
                </option>
                <option name="findus" value="friend">
                  Other Source
                </option>
              </select>
            </p>
          </div>
          <h1 className="text-center">Vehicle Details</h1>
          <div className="col-md-12 row" />

          <div className="col-md-12 row">
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-4">
                  <label>Make:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    name="make"
                    placeholder="Ex. Nissan, Toyota, Daihatsu"
                    title="What year is made your car"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-6">
                  <label>Model:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    name="model"
                    placeholder="Enter Model Of The Car"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 row">
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-4">
                  <label>Year:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="number"
                    name="year"
                    placeholder="Year it is made"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-6">
                  <label>REGO:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    name="rego"
                    placeholder="Your Vehicle Registration"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 row">
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-4">
                  <label>Colour:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="text"
                    name="colour"
                    placeholder="Car Colour"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-5">
                  <label>YR 1st RGD NZ:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="number"
                    name="firstrgdnz"
                    placeholder="First Register In NZ"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 row">
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-4">
                  <label>WOF Expiry:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="date"
                    name="wofexpiry"
                    placeholder="WOF Expiry"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 row">
              <div className="form-group row">
                <div className="col-md-5">
                  <label>Odometer:</label>
                </div>
                <div className="col-md-5">
                  <input
                    type="number"
                    name="odometer"
                    placeholder="Current km"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-default">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default JobSheet;
