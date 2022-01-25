import styled from 'styled-components';

export const ButtonContainer = styled.div`
	width: fit-content;

	a,
	button {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32px;
		width: 32px;
		border: 1px solid rgba(51, 51, 51, 0.2);
		border-radius: 50%;
		background: transparent;
		cursor: pointer;
	}

	button:disabled {
		opacity: 40%;
		cursor: auto;
		svg {
			filter: invert(12%) sepia(0%) saturate(7025%) hue-rotate(134deg)
				brightness(104%) contrast(81%);
		}
	}
`;
