import * as S from './inputFieldStyle';

export default function InputField(props) {
	return (
		<S.InputFieldContainer>
			<S.InputFieldHandler>
				<label>{props.label}</label>
				<input
					className={props.buttonLabel && 'password'}
					type={props.inputType}
					onKeyUp={props.inputFunction}
					onInput={props.inputFunction}
				/>
			</S.InputFieldHandler>
			{props.buttonLabel && <button>{props.buttonLabel}</button>}
		</S.InputFieldContainer>
	);
}
