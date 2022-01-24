import styled from 'styled-components';

export const PaginationContainer = styled.div`
	display: flex;
	justify-content: right;
	width: 100%;
`;

export const PaginationHandler = styled.div`
	display: flex;
	align-items: center;
	width: fit-content;

	span {
		margin-right: 16px;
	}

	button:first-child {
		margin-right: 8px;
	}

	button:last-child {
	}
`;
