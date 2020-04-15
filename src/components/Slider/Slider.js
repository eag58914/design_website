import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './Slider.css';

const images = [
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1018/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1015/1000/600/',
		thumbnail: 'https://picsum.photos/id/1015/250/150/'
	},
	{
		original: 'https://picsum.photos/id/1019/1000/600/',
		thumbnail: 'https://picsum.photos/id/1019/250/150/'
	}
];

class MyGallery extends React.Component {
	render() {
		return (
			<div className="img-gallery">
				<ImageGallery
					items={images}
					showFullscreenButton={false}
					showPlayButton={false}
					useBrowserFullscreen={false}
				/>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique deleniti optio quis ab, officia
					quod. Ad ab minus pariatur tempora, repellendus, architecto facere asperiores alias beatae vitae
					perferendis ullam atque?
				</p>
			</div>
		);
	}
}

export default MyGallery;
