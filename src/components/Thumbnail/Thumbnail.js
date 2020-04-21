import React from 'react';
import './Thumbnail.css';
const Thumbnails = () => {
	return (
		<div className="thumbnails-containers">
			<ul>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05466_kwlv0n.jpg"
						alt="toyota"
					/>

					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05621_zgtcco.jpg"
						alt="Interesting living room light through a window"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05513_gfbiwi.jpg"
						alt="Sara on a red bike"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05588_nb0dma.jpg"
						alt="XOXO venue in between talks"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05459_ziuomy.jpg"
						alt="Trees lit by green light during dusk"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://res.cloudinary.com/css-tricks/image/upload/f_auto,q_auto/v1568814785/photostream-photos/DSC05586_oj8jfo.jpg"
						alt="Portrait of Justin Pervorse"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
						alt="baby yoda"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
				<li className="thumbnail-li">
					<img
						className="thumbnail-image"
						src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
						alt="baby yoda"
						loading="lazy"
					/>
					<div class="overlay">
						<div class="text">Hello World</div>
					</div>
				</li>
			</ul>
			<li className="thumbnail-li" />
		</div>
	);
};

export default Thumbnails;
