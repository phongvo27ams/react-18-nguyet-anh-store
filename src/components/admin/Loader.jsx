import React from 'react';
import styled from 'styled-components';

// ========== Styled Components ========== //
const LoaderContainer = styled.section`
	position: relative;
	display: flex;
	width: 100%;
	height: 50px;
	justify-content: center;
	transform: scale(0.5);
`;

const Container = styled.div`
	position: absolute;
	display: block;
	width: 50px;
	height: 50px;
`;

const Item = styled.div`
	position: absolute;
	width: 50px;
	height: 50px;
	animation: rotate 3.5s linear infinite;
	&:nth-child(1) {
		animation-delay: 150ms;
	}
	&:nth-child(2) {
		animation-delay: 300ms;
	}
	&:nth-child(3) {
		animation-delay: 450ms;
	}
	&:nth-child(4) {
		animation-delay: 600ms;
	}
	&:nth-child(5) {
		animation-delay: 750ms;
	}
	&:nth-child(6) {
		animation-delay: 900ms;
	}
	@keyframes rotate {
		30% {
			transform: rotate(220deg);
		}
		40% {
			transform: rotate(450deg);
		}
		75% {
			transform: rotate(720deg);
			opacity: 1;
		}
		76% {
			opacity: 0;
		}
		100% {
			transform: rotate(0deg);
			opacity: 0;
		}
	}
`;

const Dot = styled.div`
	position: relative;
	top: 30px;
	width: 7px;
	height: 7px;
	background-color: #0079d7;
	border-radius: 50%;
`;

const Loader = () => {
	return (
		<LoaderContainer>
			<Container>
				<Item>
					<Dot></Dot>
				</Item>
				<Item>
					<Dot></Dot>
				</Item>
				<Item>
					<Dot></Dot>
				</Item>
				<Item>
					<Dot></Dot>
				</Item>
				<Item>
					<Dot></Dot>
				</Item>
				<Item>
					<Dot></Dot>
				</Item>
			</Container>
		</LoaderContainer>
	);
}

export default Loader;