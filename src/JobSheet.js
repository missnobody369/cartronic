import React, { Component } from 'react';
import axios from 'axios';


class JobSheet extends Component {

  componentWillMount(){
    axios.get('http://localhost:3001/api/addclient')
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onSubmitButton = (e) => {
    const $this = this;
    alert("succes");
  }

  render() {
    return (

          <form method="POST" action="http://localhost:3001/api/addclient">
            <div className="jobsheet container text-white">
              <h1 className="text-center">JOB SHEET</h1>
              <div className="text-right">
                  <label>Date:</label>
                  <input type="date" name="datetoday" required></input>
              </div>


              <div className="col-md-12">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>Name:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" name="fullname" placeholder="Enter Name" className="form-control" title="full name please!" required></input>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>Address:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" name="homeaddress" placeholder="Enter Address" className="form-control" title="Current Address" required></input>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>Contact:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" name="contactnumber" placeholder="Enter Phone Number" className="form-control" title="Number that we can contact with you" required></input>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>Work:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="text" name="work" placeholder="Enter Work" className="form-control" title="If you want" ></input>
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="form-group">
                  <div className="col-md-4">
                    <label>Email:</label>
                  </div>
                  <div className="col-md-8">
                    <input type="email" name="emailaddress" placeholder="Enter Email" className="form-control" title="please provide current email" required></input>
                  </div>
                </div>
              </div>

              <div>
                <p> HOW DID YOU FIND US:
                <label for="findus"></label>
                <select id="findus" name="findus">
                  <option name="findus" value="friend">Friend/Family</option>
                  <option name="findus" value="Yellow Pages">Yellow Pages</option>
                  <option name="findus" value="Drive Past">Drive Past(road signs)</option>
                  <option name="findus" value="Existing Customer">Existing Customer</option>
                  <option name="findus" value="Google">Google</option>
                  <option name="findus" value="News Paper">News Paper</option>
                  <option name="findus" value="Previous Customer">Drive Past</option>
                  <option name="findus" value="friend">Other Source</option>
                </select>
                </p>
              </div>
              <h1 className="text-center">Vehicle Details</h1>
              <div className="col-md-12 row">
              </div>

              <div className="col-md-12 row">
                <div className="col-md-6 row">
                  <div className="form-group row">
                    <div className="col-md-4">
                      <label>Make:</label>
                    </div>
                    <div className="col-md-5">
                      <input type="text" name="make" placeholder="Year Of Made" title="What year is made your car" required></input>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 row">
                  <div className="form-group row">
                    <div className="col-md-6">
                        <label>Model:</label>
                    </div>
                    <div className="col-md-5">
                      <input type="text" name="model" placeholder="Enter Model Of The Car" required></input>
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
                      <input type="number" name="year" placeholder="Enter Expiry Date" required></input>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 row">
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label>REGO:</label>
                    </div>
                    <div className="col-md-5">
                      <input type="text" name="rego" placeholder="Your Vehicle Registration" required></input>
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
                      <input type="text" name="colour" placeholder="Car Colour"  required></input>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 row">
                  <div className="form-group row">
                    <div className="col-md-5">
                      <label>YR 1st RGD NZ:</label>
                    </div>
                    <div className="col-md-5">
                      <input type="text" name="firstrgdnz" placeholder="First Register In NZ" required></input>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-12 row">
                <div className="col-md-6 row">
                  <div className="form-group row">
                    <div className="col-md-4">
                      <label>WOF EXPIRY:</label>
                    </div>
                    <div className="col-md-5">
                      <input type="date" name="wofexpiry" placeholder="Current km" required></input>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 row">
                  <div className="form-group row">
                    <div className="col-md-5">
                      <label>ODOMETER:</label>
                    </div>
                    <div className="col-md-5">
                      <input type="number" name="odometer" placeholder="Current km" required></input>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-default" >Submit</button>

            </div>
          </form>



    );
  }
}

export default JobSheet;