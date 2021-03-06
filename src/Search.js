import React, { Component } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import Modal from "react-modal";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      Allcustomers: [],
      searchcustomers: [],
      updatecustomer: [],
      modalIsOpen: false,
      fullname: "",
      homeaddress: "",
      work: "",
      searchValue: "",
      id: 0
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    const $this = this;
    console.log(JSON.parse(localStorage.user));
  }

  componentDidMount() {
    const $this = this;
    console.log(JSON.parse(localStorage.user));
    axios
      .get("http://localhost:3001/selectCustomer")

      .then(function(res) {
        $this.setState({ customers: res.data });
        $this.setState({ Allcustomers: res.data });
        console.log(res.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  searchCustomer = e => {
    e.preventDefault();
    const searchVal = e.target.value;
    this.setState({ searchValue: searchVal });
    var options = {
      shouldSort: true,
      threshold: 0.0,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: ["fullname", "contactnumber", "bookedday"]
    };

    var fuse = new Fuse(this.state.customers, options);

    var result = fuse.search(searchVal);

    if (searchVal === "")
      return this.setState({ customers: this.state.Allcustomers });
    else return this.setState({ customers: result });

    // console.log(result)
  };

  updateCustomer = e => {
    e.preventDefault();
    const self = this;
    axios
      .post("http://localhost:3001/updatecustomer", {
        fullname: self.state.fullname,
        homeaddress: self.state.homeaddress,
        work: self.state.work,
        id: self.state.id
      })
      .then(function(response) {
        console.log(response);
        if (response.statusText === "OK") {
          window.location.reload();
        } else {
          alert(`something's wrong`);
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  deleteCustomer = e => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const $this = this;
    var d = window.confirm("Press OK if you want to delete!");
    if (d == true) {
      axios
        .post("http://localhost:3001/deletecustomer", { id: id })

        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    } else {
      window.alert("CANCELLED");
    }
  };

  openModal(customer, id) {
    this.setState({
      modalIsOpen: true,
      fullname: customer.fullname,
      homeaddress: customer.homeaddress,
      work: customer.work,
      id: id
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false
    });
  }

  logChange = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const customer_rows = [];
    this.state.customers.map((customer, i) =>
      customer_rows.push(
        <tr key={i}>
          <td>{customer.datetoday}</td>
          <td>{customer.fullname}</td>
          <td>{customer.homeaddress}</td>
          <td>{customer.bookedday}</td>
          <td>{customer.contactnumber}</td>
          <td>{customer.work}</td>
          <td>{customer.emailaddress}</td>
          <td>{customer.make}</td>
          <td>{customer.rego}</td>
          <td>{customer.colour}</td>
          <td>{customer.findus}</td>
          <td>{customer.model}</td>
          <td>{customer.wofexpiry}</td>
          <td>{customer.firstrgdnz}</td>
          <td>{customer.year}</td>
          <td>{customer.odometer}</td>
          <td>
            <a
              onClick={this.deleteCustomer}
              data-id={customer.id}
              className="btn btn-danger btn-xs"
              href=""
              role="button"
            >
              DELETE
            </a>
          </td>
          <td>
            <a onClick={() => this.openModal(customer, customer.id)}>Edit</a>
          </td>
        </tr>
      )
    );

    const searchcustomer_rows = [];
    this.state.searchcustomers.map((searchcustomer, i) =>
      searchcustomer_rows.push(
        <tr key={i}>
          <td>{searchcustomer.datetoday}</td>
          <td>{searchcustomer.fullname}</td>
          <td>{searchcustomer.homeaddress}</td>
          <td>{searchcustomer.bookedday}</td>
          <td>{searchcustomer.contactnumber}</td>
          <td>{searchcustomer.work}</td>
          <td>{searchcustomer.emailaddress}</td>
          <td>{searchcustomer.make}</td>
          <td>{searchcustomer.rego}</td>
          <td>{searchcustomer.colour}</td>
          <td>{searchcustomer.findus}</td>
          <td>{searchcustomer.model}</td>
          <td>{searchcustomer.wofexpiry}</td>
          <td>{searchcustomer.firstrgdnz}</td>
          <td>{searchcustomer.year}</td>
          <td>{searchcustomer.odometer}</td>
        </tr>
      )
    );
    return (
      <div>
        <h1 className="Search text-white">Search:</h1>
        <input
          type="text"
          value={this.state.searchValue}
          onChange={this.searchCustomer}
        />
        <table className="table table-dark">
          <tbody>{searchcustomer_rows}</tbody>
        </table>
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">BOOKED DAY</th>
              <th scope="col">Contact Number</th>
              <th scope="col">Work</th>
              <th scope="col">Email Address</th>
              <th scope="col">Make</th>
              <th scope="col">REGO</th>
              <th scope="col">Colour</th>
              <th scope="col">Find Us</th>
              <th scope="col">Model</th>
              <th scope="col">WoF Expiry</th>
              <th scope="col">First RGD NZ</th>
              <th scope="col">Year</th>
              <th scope="col">Odometer</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {customer_rows}
            <Modal
              isOpen={this.state.modalIsOpen}
              onRequestClose={this.closeModal}
              contentLabel="Modal"
            >
              <form onSubmit={this.updateCustomer}>
                <label>Fullname</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.fullname}
                  placeholder="Dimitar"
                  name="fullname"
                  validations={["required"]}
                />
                <label>Home Address</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.homeaddress}
                  placeholder="New Zealand"
                  name="homeaddress"
                  validations={["required"]}
                />
                <label>Work</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.work}
                  placeholder="driver"
                  name="work"
                  validations={["required"]}
                />
                <div className="submit-section">
                  <button className="btn btn-uth-submit" type="submit">
                    Submit
                  </button>
                </div>
              </form>
            </Modal>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Search;
