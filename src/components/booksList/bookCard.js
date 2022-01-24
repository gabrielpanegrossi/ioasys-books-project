import { useContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import UserContext from '../../context/userContext';
import { API } from '../../services/apiConsumption';

import * as S from './booksCardStyle';

export default function BookCard(props) {
	const { customerHeaders, setLoader } = useContext(UserContext);
	const { bookId, click } = props;
	const [bookDetails, setBookDetails] = useState({
		title: '',
		authors: [],
		pageCount: '',
		publisher: '',
		published: '',
	});

	useEffect(() => {
		setLoader(true);

		async function fetchData() {
			const bookInfo = await API.getBook(customerHeaders.authorization, bookId);
			setBookDetails(bookInfo);
		}

		fetchData();
	}, [bookId]);

	useEffect(() => {
		function checkBookDetails() {
			bookDetails.authors.length > 0 && setLoader(false);
		}

		checkBookDetails();
	}, [bookDetails]);

	return (
		<S.BookCardContainer onClick={() => click(bookId, bookDetails.title)}>
			<S.BookCardHandler>
				<div className="img-handler">
					<img
						src={bookDetails.imageUrl}
						alt={`Capa do livro ${bookDetails.title}`}
					/>
				</div>
				<div className="content-handler">
					<div>
						<h3>{bookDetails.title}</h3>
						<ul>
							{bookDetails.authors.map((author, index) => (
								<li key={index}>{author}</li>
							))}
						</ul>
					</div>
					<div>
						<span>{`${bookDetails.pageCount} páginas`}</span>
						<span>{`Editora ${bookDetails.publisher}`}</span>
						<span>{`Publicado em ${bookDetails.published}`}</span>
					</div>
				</div>
			</S.BookCardHandler>
		</S.BookCardContainer>
	);
}
