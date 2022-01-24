import styled from 'styled-components';

export const bookListContainer = styled.div`
	padding-bottom: 16px;
`;

export const bookListHandler = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(272px, 288px));
	gap: 16px;
	flex-wrap: wrap;
	justify-content: space-between;
`;
