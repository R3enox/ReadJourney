import { useSelector } from 'react-redux';
import { PaginationBtn } from '../PaginationBtn/PaginationBtn';
import { RecommendedList } from '../RecommenList/RecommendedList';
import { Title } from '../../Title/Title';
import { RecommededWrapper } from './RecommendedBooks.styled';
import { selectBooks } from '../../../redux/books/booksSelectors';

export const RecommendedBooks = ({ page, setPage }) => {
  const {
    books: { results },
  } = useSelector(selectBooks);
  return (
    <RecommededWrapper>
      <div className="flexWrapper">
        <Title title={'Recommended'} />
        <PaginationBtn page={page} setPage={setPage} />
      </div>
      <RecommendedList results={results} />
    </RecommededWrapper>
  );
};
