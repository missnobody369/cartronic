import React, { Component } from 'react';

class Navbar extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount(){


    if(localStorage.user){
      const userData = JSON.parse(localStorage.user);
    }
  }

  // onExit = (e) =>{
  //   e.preventDefault()
  //   localStorage.clear()
  //   window.location.href = window.location
  // }
  
//  onLogout = (e) =>{
//    e.preventDefault()
//    localStorage.clear()
//    window.location.href = window.location
//  }
  render() {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
          <div className="container">
            <a className="navbar-brand text-uppercase text-expanded font-weight-bold d-lg-none" href="#">CARTRONICS</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item px-lg-4">
                  <a className="nav-link text-uppercase text-expanded" href="/">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item px-lg-4">
                  <a className="nav-link text-uppercase text-expanded" href="/location">LOCATION</a>
                </li>
                <li className="nav-item px-lg-4">
                  <a className="nav-link text-uppercase text-expanded" href="/jobsheet">JOB SHEET</a>
                </li>
                <li className="nav-item  px-lg-4">
                  <a className="nav-link text-uppercase text-expanded" href="/bookonline">BOOK ONLINE</a>
                </li>
                {(localStorage.user === 'admin') ?
                <li className="nav-item px-lg-4">
                  <a className="nav-link text-uppercase text-expanded" href="/search">SEARCH</a>
                </li>
                : null }
                <li className="nav-item px-lg-4">
                  <a className="nav-link text-uppercase text-expanded" href="/login">LOGIN</a>
                </li>
               
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

export default Navbar;