import React from 'react';
import styled from 'styled-components';

// ========== STYLED COMPONENTS ========== //
const LoaderContainer = styled.section`
	position: relative;
	display: flex;
	width: 100%;
	height: 50px;
	justify-content: center;
	transform: scale(0.5);
`;

const LoaderParentItem = styled.div`
	position: absolute;
	display: block;
	width: 50px;
	height: 50px;
`;

const LoaderItem = styled.div`
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

const LoaderDot = styled.div`
	position: relative;
	top: 30px;
	width: 7px;
	height: 7px;
	background-color: var(--blue-400);
	border-radius: 50%;
`;

// ========== REACT FUNCTION COMPONENT ========== //
const Loader = () => {
	return (
		<LoaderContainer>
			<LoaderParentItem>
				<LoaderItem>
					<LoaderDot></LoaderDot>
				</LoaderItem>
				<LoaderItem>
					<LoaderDot></LoaderDot>
				</LoaderItem>
				<LoaderItem>
					<LoaderDot></LoaderDot>
				</LoaderItem>
				<LoaderItem>
					<LoaderDot></LoaderDot>
				</LoaderItem>
				<LoaderItem>
					<LoaderDot></LoaderDot>
				</LoaderItem>
				<LoaderItem>
					<LoaderDot></LoaderDot>
				</LoaderItem>
			</LoaderParentItem>
		</LoaderContainer>
	);
}

export default Loader;