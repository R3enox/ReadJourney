import { useEffect, useState } from 'react';
import { Dashboard } from '../../components/Dashboard/Dashboard';
import { Filters } from '../../components/Filters/Filters';
import { RecommendedBooks } from '../../components/RecommendedBooks/RecommendedBooks';
import { SummaryBlock } from '../../components/SummaryBlock/SummaryBlock';
import { RecommendedPageWrapper } from './RecommendedPage.styled';
import { recommendThunk } from '../../redux/books/booksOperations';
import { useDispatch } from 'react-redux';
import { getDeviceType } from '../../helpers/getDeviceType';
import { RecommendLimit } from '../../constants/paginationLimits';
import { QuoteBlock } from '../../components/QuoteBlock/QuoteBlock';

const RecommendedPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  let per_page = RecommendLimit[getDeviceType()];

  useEffect(() => {
    dispatch(recommendThunk({ title, author, page, per_page }));
  }, [dispatch, title, author, page, per_page]);

  return (
    <RecommendedPageWrapper>
      <Dashboard>
        <Filters per_page={per_page} />
        <SummaryBlock />
        <QuoteBlock />
      </Dashboard>
      <RecommendedBooks page={page} setPage={setPage} />
    </RecommendedPageWrapper>
  );
};

export default RecommendedPage;
