import styled from 'styled-components';

export const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background-image: linear-gradient(180deg, #e5e5e5, #f3e7f3);

	@media (min-width: 769px) {
		background-image: url('assets/img/bg.png');
		background-size: cover;
		background-repeat: no-repeat;
		background-blend-mode: darken;
	}
`;
