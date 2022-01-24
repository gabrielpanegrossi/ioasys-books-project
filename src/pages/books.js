import { useState } from 'react';

import BooksList from '../components/booksList/booksList';
import BookModal from '../components/bookModal';

import * as S from '../style/booksStyle';

export default function Books() {
	const [openModal, setOpenModal] = useState(false);
	const [showBookWithId, setShowBookWithId] = useState('');

	const showBookById = (bookId, bookName) => {
		setShowBookWithId(bookId);
		setOpenModal(true);
	};

	const closeModal = () => {
		setShowBookWithId('');
		setOpenModal(false);
	};

	return (
		<S.booksContainer>
			{openModal && (
				<BookModal bookId={showBookWithId} closeBookModal={closeModal} />
			)}
			<BooksList openBookModal={showBookById} />
		</S.booksContainer>
	);
}
