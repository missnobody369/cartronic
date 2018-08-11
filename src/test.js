import React, { Component } from "react";
import axios from "axios";
import Fuse from "fuse.js";
import Modal from "react-modal";

class test extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
      Allcustomers: [],
      searchcustomers: [],
      updatecustomer: [],
      modalIsOpen: false,
      title: "",
      description: "",
      startdate: "",
      enddate: "",
      id: 0
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    const $this = this;
    console.log(JSON.parse(localStorage.user));
    axios.get("http://localhost:3001/searchcustomer");
  }

  componentDidMount() {
    const $this = this;
    console.log(JSON.parse(localStorage.user));
    axios
      .get("http://localhost:3001/searchcustomer")

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
      keys: ["title", "description", "startdate", "enddate"]
    };

    var fuse = new Fuse(this.state.customers, options);

    var result = fuse.search(searchVal);

    if (searchVal === "")
      return this.setState({ customers: this.state.Allcustomers });
    else return this.setState({ customers: result });

    console.log(result);
  };

  updateCustomer = e => {
    e.preventDefault();
    const self = this;
    axios
      .post("http://localhost:3001/updatecustomer", {
        title: self.state.title,
        description: self.state.description,
        startdate: self.state.startdate,
        enddate: self.state.enddate,
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
        .post("http://localhost:3001/deletecustomer", {
          id: id
        })

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
      title: customer.title,
      description: customer.description,
      startdate: customer.startdate,
      enddate: customer.enddate,
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
          <td>{customer.title}</td>
          <td>{customer.description}</td>
          <td>{customer.startdate}</td>
          <td>{customer.enddate}</td>
          <td>{customer.startdate}</td>
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
          <td>{searchcustomer.title}</td>
          <td>{searchcustomer.description}</td>
          <td>{searchcustomer.startdate}</td>
          <td>{searchcustomer.enddate}</td>
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
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Start Day</th>
              <th scope="col">End Day</th>
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
                <label>Title</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.fullname}
                  placeholder="Mr,Ms,Mrs"
                  name="title"
                  validations={["required"]}
                />
                <label>Description</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.description}
                  placeholder="description"
                  name="description"
                  validations={["required"]}
                />
                <label>Start Day</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.startdate}
                  placeholder="any day"
                  name="startdate"
                  validations={["required"]}
                />
                <label>End Day</label>
                <input
                  onChange={this.logChange}
                  className="form-control"
                  value={this.state.startdate}
                  placeholder="any day"
                  name="enddate"
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

export default test;
