import styled from 'styled-components';

export const LoginContainer = styled.main`
	height: 100vh;
	width: 100%;
	background-image: url('assets/img/login-bg.png');
	background-size: cover;

	@media (min-width: 769px) {
		padding-left: 115px;
		background-position: center;
	}

	@media (max-width: 768px) {
		padding: 15px;
		background-position: 45%;
	}
`;

export const LoginHandler = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100%;
	width: 100%;

	> div:first-child {
		width: 100%;
		margin-bottom: 50px;
	}

	.systemTitle :is(h1, h2) {
		color: #ffffff;
	}

	@media (min-width: 769px) {
	}

	@media (max-width: 768px) {
		align-items: center;
	}
`;
