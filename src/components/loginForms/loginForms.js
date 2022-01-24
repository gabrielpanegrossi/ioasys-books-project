import { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom/cjs/react-router-dom.min';

import UserContext from '../../context/userContext';
import { API } from '../../services/apiConsumption';

import InputField from '../inputField';
import FieldValidationError from '../fieldValidationError/fieldValidationError';

import * as S from './loginFormsStyle';

function LoginForms(props) {
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [errorOnLogin, setErrorOnLogin] = useState(false);
	const { setCustomerInformation, setCustomerHeaders } =
		useContext(UserContext);

	function inputSetEmail(e) {
		setEmail(e.target.value);
	}

	function inputSetPassword(e) {
		setPassword(e.target.value);
	}

	async function Login(e) {
		e.preventDefault();
		let status, error;

		if (email && password) {
			try {
				status = await API.signIn(email, password);
			} catch (e) {
				error = e;
			}
		}

		error ? setErrorOnLogin(true) : setErrorOnLogin(false);
		if (status) {
			setCustomerHeaders(status.headers);
			setCustomerInformation(status.data);
			props.history.push('/books');
		}
	}

	return (
		<S.loginFormsContainer>
			<S.loginFormsHandler onSubmit={Login}>
				<fieldset>
					<InputField
						label={'Email'}
						inputType={'text'}
						inputFunction={inputSetEmail}
					/>
					<InputField
						label={'Senha'}
						inputType={'password'}
						buttonLabel={'Entrar'}
						inputFunction={inputSetPassword}
					/>
					{errorOnLogin && (
						<FieldValidationError>
							Email e/ou senha incorretos.
						</FieldValidationError>
					)}
				</fieldset>
			</S.loginFormsHandler>
		</S.loginFormsContainer>
	);
}

export default withRouter(LoginForms);
