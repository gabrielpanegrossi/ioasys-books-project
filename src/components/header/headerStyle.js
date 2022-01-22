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

		> div {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 32px;
			width: 32px;
			margin-top: 4px;
			border: 1px solid rgba(51, 51, 51, 0.2);
			border-radius: 50%;
		}

		@media (min-width: 769px) {
			> span {
				display: block;
			}
		}
	}
`;
