import React from 'react';
import {Link} from 'react-router-dom';

const BackToTop = () => {
	return (
		<button className="fixed z-[2] right-[-2.75rem] bottom-[1.25rem] text-white px-[0.813rem] py-[0.625rem] bg-blue-500 hover:text-blue-500 hover:bg-transparent rounded-full duration-[800ms]" id="back-to-top-button">
			<i className="fa-solid fa-angle-up text-[20px]"></i>
		</button>
	);
}

export default BackToTop;