import React, {useEffect} from 'react';
import styled from 'styled-components';

// ========== STYLED COMPONENTS ========== //
const BackToTopButton = styled.button`
	position: fixed;
	z-index: 3;
	right: -60px;
	bottom: 20px;
	padding: 10px 13px;
	color: white;
	background-color: var(--blue-400);
	border-radius: 50%;
	transition: 800ms ease-in-out;
	&:hover {
		color: var(--blue-400);
		background-color: transparent;
	}
	&.active {
		right: 20px;
	}
	& i {
		font-size: 20px;
	}
`;

// ========== REACT FUNCTION COMPONENT ========== //
const BackToTop = () => {
	useEffect(() => {
		show_back_to_top();
	}, []);

	// ---------- Show the Back to Top Button when Scrolling ---------- //
	const show_back_to_top = () => {
		const backToTopButton = document.getElementById('backToTopButton');
		
		window.addEventListener('scroll', function() {
			if(this.scrollY >= 200) {
				backToTopButton.classList.add('active');
			} else {
				backToTopButton.classList.remove('active');
			}
		});

		backToTopButton.addEventListener('click', function() {
			window.scrollTo({
				top: 0,
				behavior: 'smooth'
			});
		});
	}
	
	return (
		<BackToTopButton id="backToTopButton">
			<i className="fa-solid fa-angle-up"></i>
		</BackToTopButton>
	);
}

export default BackToTop;