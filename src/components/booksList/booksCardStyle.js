import styled from 'styled-components';

export const BookCardContainer = styled.li`
	margin-bottom: 16px;
	background: #ffffff;
	box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
	border-radius: 4px;
`;

export const BookCardHandler = styled.div`
	display: flex;
	padding: 16px;

	.img-handler {
		height: 180px;
		margin-right: 16px;
		filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

		img {
			height: 100%;
			object-fit: contain;
		}
	}

	.content-handler {
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		span,
		li {
			font-size: 12px;
		}

		div:first-child {
			display: flex;
			flex-direction: column;
			margin-bottom: 8px;

			h3 {
				font-weight: 500;
			}

			li {
				color: #ab2680;
			}
		}

		div:nth-child(2) {
			display: flex;
			flex-direction: column;
			color: #999999;

			span:not(:last-child) {
				margin-bottom: 4px;
			}
		}
	}
`;
