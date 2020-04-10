import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
class DemoCarousel extends Component {
	render() {
		return (
			<Carousel>
				<div>
					<img src="assets/1.jpeg" alt="1" />
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img src="assets/2.jpeg" alt="2" />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src="assets/3.jpeg" alt="3" />
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>
		);
	}
}

export default DemoCarousel;
