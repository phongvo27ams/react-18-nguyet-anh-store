import React from 'react';

import '../../assets/css/components/admin/Loader.css';

const Loader = () => {
	return (
		<section className="loader-container">
			<div className="wrapper">
				<div className="loader">
					<div className="dot"></div>
				</div>
				<div className="loader">
					<div className="dot"></div>
				</div>
				<div className="loader">
					<div className="dot"></div>
				</div>
				<div className="loader">
					<div className="dot"></div>
				</div>
				<div className="loader">
					<div className="dot"></div>
				</div>
				<div className="loader">
					<div className="dot"></div>
				</div>
			</div>
		</section>
	);
}

export default Loader;