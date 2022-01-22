import styled from 'styled-components';

export const loginFormsContainer = styled.div``;

export const loginFormsHandler = styled.form`
	fieldset {
		border: none;
		margin: 0;
		padding: 0;

		> div {
			margin-bottom: 16px;
		}

		.inputError {
			position: absolute;
			margin-top: 16px;
		}
	}
`;
