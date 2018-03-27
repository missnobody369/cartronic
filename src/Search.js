import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      customers: [],
    };
  }

  componentWillMount(){
    const $this = this;
    console.log(JSON.parse(localStorage.user))
    axios.get('http://localhost:3001/selectCustomer')
      .then(function (response) {
        $this.setState({customers:response.data})
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onLogout = (e) =>{
    e.preventDefault()
    localStorage.clear()
    window.location.href = window.location
  }
  
  filter = (e) => {
    e.preventDefault();

    const filter = e.target.value;
    const $this = this;


  }


  render() {
    const customer_rows = [];
    this.state.customers.map((customer, i) => 

        customer_rows.push( 
            <tr key={i}>
              <td>{customer.datetoday}</td>
              <td>{customer.fullname}</td>
              <td>{customer.homeaddress}</td>
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
            </tr>
          )
    );
    return (
      
		<div>
      <li className="nav-item px-lg-4">
        <a id = "logoutBtn"className="nav-link text-uppercase text-expanded" onClick={this.onLogout} href="/logout">LOGOUT</a>
      </li>
        <table class="table table-dark">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Fullname</th>
              <th scope="col">HomeAddress</th>
              <th scope="col">ContactNumber</th>
              <th scope="col">EmailAddress</th>
              <th scope="col">Make</th>
              <th scope="col">REGO</th>
              <th scope="col">Colour</th>
              <th scope="col">Findus</th>
              <th scope="col">Model</th>
              <th scope="col">WoFexpiry</th>
              <th scope="col">Firstrgdnz</th>
              <th scope="col">Year</th>
              <th scope="col">Odometer</th>

            </tr>
          </thead>
          <tbody>
              {customer_rows}
          </tbody>
        </table>
		</div>

    );
  }
}

export default Search;