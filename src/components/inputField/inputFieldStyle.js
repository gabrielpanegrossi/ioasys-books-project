import styled from 'styled-components';

export const InputFieldContainer = styled.div`
	display: flex;
	justify-content: space-between;
	min-width: 288px;
	width: 90%;
	max-width: 368px;
	padding: 8px 16px;
	background-color: rgba(0, 0, 0, 0.32);

	input {
		width: 100%;
	}

	button {
		min-height: 36px;
		min-width: 85px;
		font-size: 16px;
		font-weight: 500;
		color: #b22e6f;
		background-color: #ffffff;
		border: 1px solid #ffffff;
		border-radius: 44px;
	}
`;

export const InputFieldHandler = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;

	label {
		margin-bottom: 4px;
		font-size: 12px;
		font-weight: 400;
		color: #ffffff;
	}

	input {
		width: 100%;
		font-size: 16px;
		color: #ffffff;
		font-weight: normal;
		border: none;
		background: transparent;

		:focus {
			border: none;
			outline: none;
		}

		&.password {
			width: 95%;
		}
	}
`;
