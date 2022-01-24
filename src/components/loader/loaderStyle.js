import styled, { keyframes } from 'styled-components';

const Rotate = keyframes`
   0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const LoaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 999;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const LoaderHandler = styled.div`
	border: 16px solid #f3f3f3;
	border-top: 16px solid #b22e6f;
	border-radius: 50%;
	width: 120px;
	height: 120px;
	animation: ${Rotate} 2s linear infinite;
`;
