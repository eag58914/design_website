import React from 'react';
import './Thumbnail.css';
const Thumbnails = () => {
	return (
		<div className="thumbnails-containers">
			<ul>
				<li>
					<img
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
						alt="toyota"
					/>
				</li>
				<li>
					<img
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
						alt="Interesting living room light through a window"
						loading="lazy"
					/>
				</li>
				<li>
					<img
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
						alt="Sara on a red bike"
						loading="lazy"
					/>
				</li>
				<li>
					<img
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
						alt="XOXO venue in between talks"
						loading="lazy"
					/>
				</li>
				<li>
					<img
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg"
						alt="Trees lit by green light during dusk"
						loading="lazy"
					/>
				</li>
				<li>
					<img
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg"
						alt="Portrait of Justin Pervorse"
						loading="lazy"
					/>
				</li>
			</ul>
			<li />
		</div>
	);
};

export default Thumbnails;
