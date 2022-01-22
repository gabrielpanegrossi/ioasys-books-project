import SystemTitle from '../components/systemTitle';
import LoginForms from '../components/loginForms';
import * as S from '../style/loginStyle';

export default function Login() {
	return (
		<S.LoginContainer>
			<S.LoginHandler>
				<SystemTitle />
				<LoginForms />
			</S.LoginHandler>
		</S.LoginContainer>
	);
}
