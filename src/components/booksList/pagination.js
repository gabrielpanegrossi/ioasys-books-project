import CircleButton from '../circleButton';
import * as S from './paginationStyle';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useEffect, useState } from 'react/cjs/react.development';

export default function Pagination(props) {
	const [prevButtonDisabled, setPrevButtonDisabled] = useState(true);
	const [nextButtonDisabled, setNextButtonDisabled] = useState(false);
	const [lastPage, setlastPage] = useState('');

	useEffect(() => {
		const treatedTotalPages = parseInt(props.pages.totalPages);
		props.pages.totalPages > treatedTotalPages
			? setlastPage(treatedTotalPages + 1)
			: setlastPage(props.pages.totalPages);
	}, [props]);

	const { pages, changePageFunction } = props;

	function changeToNextPage() {
		const nextPage = pages.page + 1;

		if (nextPage > lastPage) {
			return false;
		} else {
			setPrevButtonDisabled(false);
			nextPage === lastPage && setNextButtonDisabled(true);
			changePageFunction(nextPage);
		}
	}

	function changeToPrevPage() {
		const prevPage = pages.page - 1;

		if (prevPage > lastPage || prevPage === 0) {
			return false;
		} else {
			prevPage === 1 && setPrevButtonDisabled(true);
			setNextButtonDisabled(false);
			changePageFunction(prevPage);
		}
	}

	return (
		<S.PaginationContainer>
			<S.PaginationHandler>
				<span>{`Página ${pages.page || ''} de ${lastPage || ''}`}</span>
				<CircleButton disabled={prevButtonDisabled} click={changeToPrevPage}>
					<FiChevronLeft />
				</CircleButton>
				<CircleButton disabled={nextButtonDisabled} click={changeToNextPage}>
					<FiChevronRight />
				</CircleButton>
			</S.PaginationHandler>
		</S.PaginationContainer>
	);
}
