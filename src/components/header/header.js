import { useContext } from 'react';

import UserContext from '../../context/userContext';
import { Token } from '../../services/userToken';

import SystemTitle from '../systemTitle';
import CircleButton from '../circleButton';
import { FiLogOut } from 'react-icons/fi';

import * as S from './headerStyle';

export default function Header() {
	const { customerInformation, setCustomerInformation, setCustomerHeaders } =
		useContext(UserContext);

	function Logout() {
		Token.removeToken();
		setCustomerHeaders(undefined);
		setCustomerInformation(undefined);
	}

	return (
		<S.Header>
			<S.HeaderHandler>
				<SystemTitle />
				<div className="customer">
					<span>
						Bem vind{customerInformation.gender !== 'M' ? 'a' : 'o'},{' '}
						<strong>{customerInformation.name}</strong>
					</span>
					<CircleButton click={Logout}>
						<FiLogOut />
					</CircleButton>
				</div>
			</S.HeaderHandler>
		</S.Header>
	);
}
