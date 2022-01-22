import styled from 'styled-components';

export const FieldValidationErrorContainer = styled.div`
	position: relative;
	width: fit-content;
	padding: 16px;
	background: rgba(255, 255, 255, 0.4);

	&::before {
		position: absolute;
		bottom: 100%;
		content: '';
		display: block;
		width: 0;
		height: 0;
		border-left: 12px solid transparent;
		border-right: 12px solid transparent;
		border-bottom: 12px solid rgba(255, 255, 255, 0.4);
	}
`;

export const FieldValidationErrorHandler = styled.p`
	width: fit-content;
	font-size: 16px;
	font-weight: 700;
	color: #ffffff;
`;
