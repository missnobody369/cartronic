import React, { Component } from 'react';
class Header extends Component {
  render() {
    return (
      <header>
        <h1 className="site-heading text-center text-white d-none d-lg-block">
          <span className="site-heading-upper text-primary mb-3">You Drive IT We Fix IT!</span>
          <span className="site-heading-lower">CARTRONICS..</span>
        </h1>   
      </header>
      

    );
  }
}


export default Header;
