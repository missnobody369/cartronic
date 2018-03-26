import React, { Component } from 'react';

class Home extends Component {
	render() {
    	return (
	    	<section className="page-section clearfix">		
		    	<div className="container">
		       		<div className="intro">
			         	<img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="pictures/intro.jpg" alt=""></img>
				        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
					       	<h2 className="section-heading mb-4">
						  		<span className="section-heading-lower">Welcome!</span>
							</h2>
				            <p className="mb-3">

								IS YOUR CARS WOF DUE? DON'T FORGOT ABOUT THE SERVICE OF YOUR CAR. THEN NOT TO WORRY! JUST BRING YOUR CAR TO CARTRONICS ONEHUNGA...
								WE SPECIALIZE IN AUTO ELECTRICAL AND MECHANICAL WORKS AS WELL...

								SO COME OVER FOR GREAT DEALS AT 24 SELWYN STREET ONEHUNGA! 

								PLACE WHERE WE CAN PROVIDE SOLUTION FOR YOUR CARS, COME AND HAVE A GREAT DEALS IN CARTRONICS! 
				            </p>
			            	<div className="intro-button mx-auto">
			              		<a className="btn btn-primary btn-xl" href="https://www.google.co.nz/maps/place/Cartronics+Onehunga/@-36.9251178,174.7809771,17z/data=!3m1!4b1!4m5!3m4!1s0x6d0d48ad500d8c9b:0x4f6ec5565bf49150!8m2!3d-36.9251178!4d174.7831658?hl=bg">Visit Us Today!</a>
			            	</div>
				        </div>
		       	 	</div>
		      	</div>
		      	<div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="index.html">Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="about.html">LOCATION</a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="products.html">BOOK ONLINE</a>
            </li>
            <li className="nav-item px-lg-4">
              <a className="nav-link text-uppercase text-expanded" href="JobSheet.js">Job Sheet</a>
            </li>
          </ul>
        </div>

	    	</section>

    	);
 	}
}

export default Home;



