import styled from 'styled-components';

export const BookContainer = styled.article`
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	z-index: 999;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	padding: 0px 16px;
	background: rgba(0, 0, 0, 0.4);
`;

export const BookHandler = styled.div`
	> div {
		position: fixed;
		right: 16px;
		top: 16px;

		button {
			background: #ffffff;
		}
	}

	> section {
		height: calc(90vh - 64px);
		width: 100%;
		max-width: 769px;
		padding: 16px;
		background: #ffffff;
		font-size: 12px;
		overflow: scroll;

		.img-handler {
			width: 100%;
			max-width: 349px;
			margin-bottom: 24px;
			filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));

			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}

		.content-handler {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 100%;
			max-width: 349px;
			row-gap: 32px;

			h4 {
				text-transform: uppercase;
				margin-bottom: 16px;
			}

			h4,
			strong {
				font-weight: 500;
			}

			.book-header {
				h3 {
					font-size: 28px;
					font-weight: 500;
					max-height: 80px;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				span {
					color: #ab2680;
				}
			}

			.book-information {
				h4 {
				}

				> div {
					display: flex;
					justify-content: space-between;

					&:not(:last-child) {
						margin-bottom: 8px;
					}
				}
			}

			.book-description {
				text-align: justify;

				img {
					margin-right: 8px;
				}
			}
		}

		@media (min-width: 769px) {
			height: 100%;
			display: flex;
			padding: 48px;
			margin-bottom: 0px;

			.img-handler {
				margin-right: 48px;
				margin-bottom: auto;
			}

			.content-handler {
				max-width: 276px;
			}
		}
	}
`;
