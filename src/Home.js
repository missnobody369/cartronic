import React, { Component } from 'react';

class Home extends Component {
	render() {
    	return (
	    	<section className="page-section clearfix">		
		    	<div className="container">
		       		<div className="intro">
			         	<img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="pictures/intro.jpg" alt=""></img>
				        <div className="intro-text left-0 text-center bg-faded p-5 rounded">
					       	<h2 className="section-heading mb-4"><span className="section-heading-lower">Welcome!</span></h2>
				          <p className="mb-3"> IS YOUR CARS WOF DUE? DON'T FORGOT ABOUT THE SERVICE OF YOUR CAR. THEN NOT TO WORRY! JUST BRING YOUR CAR TO CARTRONICS ONEHUNGA...
										WE SPECIALIZE IN AUTO ELECTRICAL AND MECHANICAL WORKS AS WELL...
										SO COME OVER FOR GREAT DEALS AT 24 SELWYN STREET ONEHUNGA! 
										PLACE WHERE WE CAN PROVIDE SOLUTION FOR YOUR CARS, COME AND HAVE A GREAT DEALS IN CARTRONICS! 
				          </p>
									<div className="intro-button mx-auto">
											<a className="btn btn-primary btn-xl" href="https://www.google.co.nz/maps/place/Cartronics+Onehunga/@-36.9251178,174.7809771,17z/data=!3m1!4b1!4m5!3m4!1s0x6d0d48ad500d8c9b:0x4f6ec5565bf49150!8m2!3d-36.9251178!4d174.7831658?hl=bg">Visit Us Today!</a>
									</div>
									{/* <h2 className="">About Us</h2>
										<p>For over twelve years Cartronics Onehunga has been providing the best service a customer could ask for.
											People trust the experienced staff with any sort of car problems as the staff takes care of the vehicles as if it were their own.
											That is why Cartronics is the one shop pit stop for all your auto electrical and mechanical needs including WOF and vehicle servicing at a reasonable price - you'll never drive off disappointed.
										</p> */}
				        </div>
		       	 	</div>
		      	</div>
	    	</section>

    	);
 	}
}

export default Home;



