import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	height: 40px;
`;

export const HeaderHandler = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;

	.customer {
		display: flex;
		align-items: center;

		> span {
			display: none;
			margin-right: 16px;
		}

		@media (min-width: 769px) {
			> span {
				display: block;
			}
		}
	}
`;
