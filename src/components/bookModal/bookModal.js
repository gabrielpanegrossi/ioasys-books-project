import UserContext from '../../context/userContext';

import CircleButton from '../circleButton/circleButton';
import * as S from './bookModalStyle';
import { FiX } from 'react-icons/fi';
import { useState, useEffect, useContext } from 'react';
import { API } from '../../services/apiConsumption';
import Quotes from '../../assets/img/Quotes.png';

export default function BookModal(props) {
	const { bookId, closeBookModal } = props;
	const { customerHeaders } = useContext(UserContext);
	const [bookDetails, setBookDetails] = useState({
		title: '',
		authors: [],
		pageCount: '',
		publisher: '',
		published: '',
		language: '',
		isbn10: '',
		isbn13: '',
		description: '',
	});

	useEffect(() => {
		async function fetchData() {
			const bookInfo = await API.getBook(customerHeaders.authorization, bookId);
			setBookDetails(bookInfo);
		}

		fetchData();
	}, [bookId]);

	return (
		<S.BookContainer>
			<S.BookHandler>
				<CircleButton click={closeBookModal}>
					<FiX />
				</CircleButton>
				<section>
					<div className="img-handler">
						<img
							src={bookDetails.imageUrl}
							alt={`Capa do livro ${bookDetails.title}`}
						/>
					</div>
					<div className="content-handler">
						<div className="book-header">
							<h3>{bookDetails.title}</h3>
							<span>
								{bookDetails.authors.map(
									(author, index) =>
										`${author}${
											bookDetails.authors.length !== index + 1 ? ', ' : ''
										}`
								)}
							</span>
						</div>
						<div className="book-information">
							<h4>informações</h4>
							<div>
								<strong>Páginas</strong>
								<span>{bookDetails.pageCount}</span>
							</div>
							<div>
								<strong>Editora</strong>
								<span>{bookDetails.publisher}</span>
							</div>
							<div>
								<strong>Publicação</strong>
								<span>{bookDetails.published}</span>
							</div>
							<div>
								<strong>Idioma</strong>
								<span>{bookDetails.language}</span>
							</div>
							<div>
								<strong>Titulo Original</strong>
								<span>{bookDetails.title}</span>
							</div>
							<div>
								<strong>ISBN-10</strong>
								<span>{bookDetails.isbn10}</span>
							</div>
							<div>
								<strong>ISBN-13</strong>
								<span>{bookDetails.isbn13}</span>
							</div>
						</div>
						<div className="book-description">
							<h4>resenha da editora</h4>
							<div>
								<img src={Quotes} alt="" />
								<span>{bookDetails.description}</span>
							</div>
						</div>
					</div>
				</section>
			</S.BookHandler>
		</S.BookContainer>
	);
}
