import axios from 'axios';
import { useEffect, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

import UserContext from '../../context/userContext';

export default function BooksList() {
	const { REACT_APP_BACKEND_URL } = process.env;
	const { customerIsLogged } = useContext(UserContext);
	const [booksList, setBookList] = useState([]);

	const { authorization } = customerIsLogged.headers;

	async function getBooksList() {
		const list = await axios.get(
			`${REACT_APP_BACKEND_URL}books?page=1&amount=25&category=biographies`,
			{ headers: { authorization: `Bearer ${authorization}` } }
		);

		setBookList(list.data.data);
	}

	useEffect(() => {
		getBooksList();
	}, []);

	return (
		<>
			{booksList.map((el, index) => {
				return <div key={index}>{el.title}</div>;
			})}
		</>
	);
}
