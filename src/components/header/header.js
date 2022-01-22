import { useContext } from 'react';

import UserContext from '../../context/userContext';

import SystemTitle from '../systemTitle';
import { FiLogOut } from 'react-icons/fi';

import * as S from './headerStyle';

export default function Header() {
	const { customerIsLogged, setCustomerIsLogged } = useContext(UserContext);
	console.log(customerIsLogged);

	const { data } = customerIsLogged;

	return (
		<S.Header>
			<S.HeaderHandler>
				<SystemTitle />
				<div className="customer">
					<span>
						Bem vind{data.gender !== 'M' ? 'a' : 'o'},{' '}
						<strong>{data.name}</strong>
					</span>
					<div onClick={() => setCustomerIsLogged(undefined)}>
						<FiLogOut />
					</div>
				</div>
			</S.HeaderHandler>
		</S.Header>
	);
}
