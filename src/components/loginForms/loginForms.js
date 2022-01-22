import { useContext, useState } from 'react';
import axios from 'axios';

import UserContext from '../../context/userContext';

import InputField from '../inputField';
import FieldValidationError from '../fieldValidationError/fieldValidationError';

import * as S from './loginFormsStyle';

const { REACT_APP_BACKEND_URL } = process.env;

export default function LoginForms() {
	const [email, setEmail] = useState(undefined);
	const [password, setPassword] = useState(undefined);
	const [errorOnLogin, setErrorOnLogin] = useState(false);
	const { setCustomerIsLogged } = useContext(UserContext);

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
			const data = { email, password };

			try {
				status = await axios.post(`${REACT_APP_BACKEND_URL}auth/sign-in`, data);
				const refreshToken = status.headers['refresh-token'];
				const teste = await axios.post(
					'https://books.ioasys.com.br/api/v1/auth/refresh-token',
					{ refreshToken }
				);
				console.log(teste);
			} catch (e) {
				error = e;
			}
		}

		error ? setErrorOnLogin(true) : setErrorOnLogin(false);
		status && setCustomerIsLogged(status);
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
