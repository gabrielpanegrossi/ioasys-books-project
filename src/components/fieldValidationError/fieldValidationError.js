import * as S from './fieldValidationErrorStyle';

export default function FieldValidationError(props) {
	return (
		<S.FieldValidationErrorContainer className="inputError">
			<S.FieldValidationErrorHandler>
				{props.children}
			</S.FieldValidationErrorHandler>
		</S.FieldValidationErrorContainer>
	);
}
