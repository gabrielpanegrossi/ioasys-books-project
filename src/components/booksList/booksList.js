import { useEffect, useContext } from 'react';
import { useState } from 'react/cjs/react.development';

import UserContext from '../../context/userContext';
import { API } from '../../services/apiConsumption';

import BookCard from './bookCard';
import Pagination from './pagination';
import * as S from './booksListStyle';

export default function BooksList(props) {
	const { customerHeaders, setCustomerHeaders } = useContext(UserContext);
	const [booksList, setBookList] = useState([]);
	const [categoryPages, setCategoryPages] = useState(0);
	const [atualPage, setAtualPage] = useState(1);

	const { authorization } = customerHeaders;

	useEffect(() => {
		async function getBooksList() {
			try {
				const reqResult = await API.getBooks(
					authorization,
					atualPage ? atualPage : 1
				);
				setBookList(reqResult.data.data);
				setCategoryPages(reqResult.data);
			} catch (e) {}
		}

		async function fetchData() {
			try {
				const { headers } = await API.getNewToken();
				setCustomerHeaders(headers);
				getBooksList();
			} catch (e) {
				setCustomerHeaders(undefined);
			}
		}

		fetchData();
	}, [atualPage]);

	const changeAtualPage = (page) => {
		setAtualPage(page);
	};

	return (
		<S.bookListContainer>
			<S.bookListHandler>
				{booksList.map((el, index) => (
					<BookCard click={props.openBookModal} key={index} bookId={el.id} />
				))}
			</S.bookListHandler>
			<Pagination pages={categoryPages} changePageFunction={changeAtualPage} />
		</S.bookListContainer>
	);
}
